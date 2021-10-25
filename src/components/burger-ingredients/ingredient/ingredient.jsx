import React from "react";
import {useDrag} from "react-dnd";
import PropTypes from 'prop-types';

import ingredientStyles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from "react-router-dom";

export default function Ingredient({ ingredient }) {
    const [, ingredientRef] = useDrag({
        type: 'ingredient',
        item: ingredient
    });
    const location = useLocation();

    return (
        <Link
            to={{
                pathname: `/ingredients/${ingredient._id}`,
                state: { background: location }
            }}
            className={ ingredientStyles.ingredient }>
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
        </Link>
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
