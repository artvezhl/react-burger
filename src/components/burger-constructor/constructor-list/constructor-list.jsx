import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    SET_TOTAL,
    SET_INGREDIENTS_IDS,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT
} from "../../../services/actions/constructor-list";
import {DECREASE_INGREDIENT_COUNT, INCREASE_INGREDIENT_COUNT} from "../../../services/actions/burger-ingredients";

import listStyles from './constructor-list.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrop} from "react-dnd";

export default function ConstructorList() {
    const { bun, ingredients } = useSelector(state => ({
        bun: state.burger.bun,
        ingredients: state.burger.ingredients,
    }));
    const dispatch = useDispatch();
    const [, listRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            dispatch({
                type: ADD_INGREDIENT,
                ingredient: item,
            });
            dispatch({
                type: INCREASE_INGREDIENT_COUNT,
                ingredientId: item._id,
            });

        }
    })

    useEffect(() => {
        cartTotal(ingredients);
        setIngredientsIDs(ingredients);
    }, [bun, ingredients]);

    const cartTotal = (ingredients) => {
        let total = bun.price * 2;
        ingredients.forEach(ingredient => {
            if (ingredient.type !== 'bun') total += ingredient.price;
        });
        dispatch({
            type: SET_TOTAL,
            total: total
        });
    }

    const setIngredientsIDs = (ingredients) => {
        const ingredientsIDs = ingredients.map(ingredient => ingredient._id);
        dispatch({
            type: SET_INGREDIENTS_IDS,
            IDs: ingredientsIDs,
        })
    }

    const removeIngredient = (e, id) => {
        if (e.target.closest('.constructor-element__action')) {
            dispatch({
                type: REMOVE_INGREDIENT,
                id: id,
            })
            dispatch({
                type: DECREASE_INGREDIENT_COUNT,
                ingredientId: id,
            })
        };
    }

    const topBunMarkup =
        <article className={listStyles.bothSides}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
            />
        </article>;

    const bottomBunMarkup =
        <article className={listStyles.bothSides}>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
            />
        </article>;

    const ingredientsMarkup =
        <div className={ listStyles.constructorList }>
            {
                !ingredients.length
                    ? <h3 className="text text_type_main-medium text_color_inactive pl-10 pt-1 pl-7">А теперь выберите ингредиенты для бургера</h3>
                    : ingredients.filter(ingredient => ingredient.type !== 'bun').map(ingredient => (
                        <article onClick={(e) => removeIngredient(e, ingredient._id)} className={ listStyles.item } key={ingredient._id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </article>
                    ))
            }
        </div>;

    const content =
        !Object.keys(bun).length
            ? <h3 className="text text_type_main-medium pt-10 text_color_inactive">
                Для начала выберите булку для бургера - перетащите ее прямо сюда
            </h3>
            : <>{topBunMarkup} {ingredientsMarkup} {bottomBunMarkup}</>;

    return (
        <div ref={listRef} className={ listStyles.commonList }>
            {content}
        </div>
    )
}