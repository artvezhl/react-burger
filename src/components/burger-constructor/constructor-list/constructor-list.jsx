import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { SET_TOTAL, SET_INGREDIENTS_IDS } from "../../../services/actions/constructor-list";

import listStyles from './constructor-list.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import OrderDetails from "../../order-details/order-details";

export default function ConstructorList() {
    const ingredients = useSelector(state => state.burger.ingredients);
    const dispatch = useDispatch();

    const [bun] = ingredients.filter(ingredient => ingredient.type === 'bun');

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

    useEffect(() => {
        cartTotal(ingredients);
        setIngredientsIDs(ingredients);
    }, [cartTotal, setIngredientsIDs, ingredients]);

    return (
        <div className={ listStyles.commonList }>
            <article className={listStyles.bothSides}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </article>
            <div className={ listStyles.constructorList }>
                {
                    ingredients.filter(ingredient => ingredient.type !== 'bun').map(ingredient => (
                        <article className={ listStyles.item } key={ingredient._id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </article>
                    ))
                }
            </div>
            <article className={listStyles.bothSides}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </article>
        </div>
    )
}

OrderDetails.propTypes = {
    constructorState: PropTypes.shape({
        ingredients: PropTypes.shape(Object),
        bunName: PropTypes.string.isRequired,
    }),
    constructorDispatcher: PropTypes.func,
}
