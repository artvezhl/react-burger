import React, { FC } from 'react';

import styles from './order.module.css';
import OrderIngredient from '../components/order/order-ingredient/order-ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const orderNumber = 657438;
const orderDate = 'Сегодня, 16:20 i-GMT+3';
const burgerName = 'Death Star Starship Main бургер';

const saucePic = 'https://code.s3.yandex.net/react/code/sauce-02.png';
const bunPic = 'https://code.s3.yandex.net/react/code/bun-01.png';
const firstMealPic = 'https://code.s3.yandex.net/react/code/meat-01.png';
const secondMealPic = 'https://code.s3.yandex.net/react/code/meat-02.png';
const thirdMealPic = 'https://code.s3.yandex.net/react/code/sp_1.png';
const fourthMealPic = 'https://code.s3.yandex.net/react/code/core.png';
const orderStatus = 'Выполнен';

const price = 13425;

type TOrderPageProps = {
    number: number;
    name: string;
    date: string;
    ingredientsIDs: Array<string>;
};

export const OrderPage: FC<TOrderPageProps> = ({ number, name, date, ingredientsIDs }) => {
    return (
        <div className={styles.main}>
            <p className={`text text_type_main-default mb-10 ${styles.number}`}>#{orderNumber}</p>
            <h3 className="text text_type_main-medium mb-3">{burgerName}</h3>
            <p className={`text text_type_main-default mb-15 ${styles.status}`}>{orderStatus}</p>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <div className={styles.order}>
                <div className={`pr-6 ${styles.ingredients}`}>
                    <OrderIngredient name={name} image={bunPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={saucePic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={firstMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={secondMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={thirdMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={fourthMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={saucePic} index={10} count={2} price={350} />
                </div>
                <div className={`mt-10 ${styles.data}`}>
                    <p className={`text text_type_main-default text_color_inactive`}>{orderDate}</p>
                    <p className={`text text_type_digits-default ${styles.price}`}>
                        {price}
                        <span className="ml-2">
                            <CurrencyIcon type="primary" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
