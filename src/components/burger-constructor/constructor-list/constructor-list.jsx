import React, {memo, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useDrop } from "react-dnd";

// TODO
// - изменить логику счетчиков у ингредиентов (сделать чтобы они просто сравнивали массивы свои и массив бургера и по итогу выдавали результат счетчиков)

import { ConstructorIngredient } from "../constructor-ingredient/constructor-ingredient";
import {
    SET_TOTAL,
    SET_INGREDIENTS_IDS,
    ADD_INGREDIENT,
    MOVE_CARD,
    SET_INGREDIENT_INDEX,
} from "../../../services/actions/constructor-list";
import {INCREASE_INGREDIENT_COUNT} from "../../../services/actions/burger-ingredients";

import listStyles from './constructor-list.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

export const ConstructorList = memo(function ConstructorList() {
    const { bun, ingredients } = useSelector(state => ({
        bun: state.burger.bun,
        ingredients: state.burger.ingredients,
    }));
    const dispatch = useDispatch();

    const moveCard = (index, atIndex) => {
        dispatch({
            type: MOVE_CARD,
            index: index,
            atIndex: atIndex,
        })
    }
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
        const ingredientsIDs = ingredients.map(ingredient => ingredient._id).concat(bun._id);
        dispatch({
            type: SET_INGREDIENTS_IDS,
            IDs: ingredientsIDs,
        })
    }

    const setIngredientsIndex = () => {
        dispatch({
            type: SET_INGREDIENT_INDEX
        })
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

    const renderIngredients = (ingredient, index) => {
        return (
            <ConstructorIngredient
                key={index}
                ingredient={ingredient}
                index={index}
                moveCard={moveCard}
                setIngredientsIndex={setIngredientsIndex}
            />
        );
    }

    const ingredientsMarkup =
        <div className={ listStyles.constructorList }>
            {
                !ingredients.length
                    ? <h3 className="text text_type_main-medium text_color_inactive pl-10 pt-1 pl-7">
                        А теперь выберите ингредиенты для бургера</h3>
                    : ingredients.map((ingredient, index) => renderIngredients(ingredient, index))
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
})