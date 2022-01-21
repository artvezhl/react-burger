import React, { FC } from 'react';

import { useDrag } from 'react-dnd';

import ingredientStyles from './ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { TIngredientProps } from './ingredient-types';
import { DEPLOY_URL } from '../../../services/constants';

const Ingredient: FC<TIngredientProps> = ({ ingredient }) => {
    const [, ingredientRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
    });
    const location = useLocation();

    return (
        <Link
            to={{
                pathname: `/${DEPLOY_URL}ingredients/${ingredient._id}`,
                state: { background: location },
            }}
            ref={ingredientRef}
            className={ingredientStyles.ingredient}
        >
            <img src={ingredient.image} alt={ingredient.name} />
            <div className={`${ingredientStyles.ingredient__priceWrapper} text text_type_digits-default mt-1 mb-1`}>
                <p className={`${ingredientStyles.ingredient__price} mr-2`}>{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${ingredientStyles.ingredient__name}`}>{ingredient.name}</p>
            {ingredient.ingredientCount && ingredient.ingredientCount > 0 ? (
                <Counter count={ingredient.ingredientCount} size="default" />
            ) : null}
        </Link>
    );
};

export default Ingredient;
