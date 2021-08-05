import React, {useEffect} from "react";
import {useDrag} from "react-dnd";
import PropTypes from 'prop-types';

import ingredientStyles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

export default function Ingredient({ ingredient, openModal }) {
    const burgerIngredients = useSelector(state => state.burger.ingredients);
    const [, ingredientRef] = useDrag({
        type: 'ingredient',
        item: ingredient
    })

    useEffect(() => {
    }, [ingredient.ingredientCount]);

    return (
        <li onClick={ () => openModal(ingredient) } className={ ingredientStyles.ingredient }>
            <img ref={ingredientRef} src={ ingredient.image } alt={ ingredient.name }/>
            <div className={`${ ingredientStyles.ingredient__priceWrapper } text text_type_digits-default mt-1 mb-1`}>
                <p className={ ingredientStyles.ingredient__price }>{ ingredient.price }</p>
                <CurrencyIcon className="ml-2" type="primary dashed" />
            </div>
            <p
                className={`text text_type_main-default ${ ingredientStyles.ingredient__name }`}
            >{ ingredient.name }</p>
            {
                (ingredient.ingredientCount > 0) &&
                <Counter
                    count={ingredient.ingredientCount}
                    size="default"
                />
            }
        </li>
    );
}

Ingredient.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    openModal: PropTypes.func,
}