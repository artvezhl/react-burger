import React from "react";
import PropTypes from 'prop-types';

import ingredientStyles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Ingredient({ ingredient }) {
    return (
        <li className={ ingredientStyles.ingredient }>
            <img src={ ingredient.image } alt={ ingredient.name }/>
            <div className={`${ ingredientStyles.ingredient__priceWrapper } text text_type_digits-default mt-1 mb-1`}>
                <p className={ ingredientStyles.ingredient__price }>{ ingredient.price }</p>
                <CurrencyIcon className="ml-2" type="primary dashed" />
            </div>
            <p
                className={`text text_type_main-default ${ ingredientStyles.ingredient__name }`}
            >{ ingredient.name }</p>
            <Counter count={1} size="default"/>
        </li>
    );
}

Ingredient.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
}