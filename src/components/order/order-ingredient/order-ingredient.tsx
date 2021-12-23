import React, { FC } from 'react';

import styles from './order-ingredient.module.css';
import CircleIngredient from '../../circle-ingredient/circle-ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from '../../burger-ingredients/ingredient/ingredient-types';

type TOrderIngredientProps = {
    name: string;
    image: string;
    index: number;
    price: number;
    count: number;
};

const OrderIngredient: FC<TOrderIngredientProps> = ({ name, image, index, price, count }) => {
    return (
        <div className={styles.main}>
            <CircleIngredient name={name} url={image} index={index} />
            <p className="text text_type_main-default ml-4">{name}</p>
            <p className={`text text_type_digits-default ${styles.price}`}>
                <span>{count}</span>x {price}
                <span className="ml-2">
                    <CurrencyIcon type="primary" />
                </span>
            </p>
        </div>
    );
};

export default OrderIngredient;
