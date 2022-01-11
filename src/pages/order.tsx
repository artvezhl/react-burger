import React, { ReactElement, useEffect, useMemo, useState } from 'react';

import styles from './order.module.css';
import OrderIngredient from '../components/order/order-ingredient/order-ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import { dataFunc, orderSumFunc } from '../utils';
import { TIngredientDetailsParams } from '../components/ingredient-details/ingredient-details-types';
import { TFeedOrder } from '../components/feed/feed';
import { useDispatch, useSelector } from '../services/hooks';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/action-types/wsActionTypes';
import { WS_URL } from '../services/constants';
import { TIngredient } from '../components/burger-ingredients/ingredient/ingredient-types';

const orderIngredients = (
    order: TFeedOrder | undefined,
    ingredients: Array<TIngredient>,
): Array<TIngredient> | null => {
    if (order) {
        const result = order.ingredients.reduce((arr: Array<TIngredient>, ingredientID) => {
            for (const item of arr) {
                if (item._id === ingredientID) {
                    item.ingredientCount += 1;
                    return arr;
                }
            }
            const currentIngredient = ingredients.find((ingredient: TIngredient) => ingredient._id === ingredientID);
            if (currentIngredient) {
                currentIngredient.ingredientCount += 1;
                arr.push(currentIngredient);
            }

            return arr;
        }, []);

        console.log(result);

        return result;
    }

    return null;
};

export const OrderPage = (): ReactElement | null => {
    const ingredients = useSelector((store) => store.ingredients.ingredients);
    const currentOrders = useSelector((store) => store.feed.orders);
    const dispatch = useDispatch();
    const [currentOrder, setCurrentOrder] = useState<TFeedOrder>();
    const { id } = useParams<TIngredientDetailsParams>();

    const orderStatus =
        currentOrder &&
        (currentOrder.status === 'done' ? 'Выполнен' : currentOrder.status === 'created' ? 'Создан' : 'Готовится');

    // const order =
    //     currentOrder &&
    //     currentOrder.ingredients.reduce((arr: Array<TIngredient>, ingredientID): Array<TIngredient> => {
    //         for (const item of arr) {
    //             if (item._id === ingredientID) {
    //                 item.ingredientCount += 1;
    //                 return arr;
    //             }
    //         }
    //         const currentIngredient = ingredients.find((ingredient: TIngredient) => ingredient._id === ingredientID);
    //         currentIngredient.ingredientCount += 1;
    //         arr.push(currentIngredient);
    //
    //         return arr;
    //     }, []);

    useEffect(() => {
        setCurrentOrder(currentOrders.filter((item: TFeedOrder) => item._id === id)[0]);
    }, [currentOrders, id]);

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: { url: `${WS_URL}/all` } });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);

    const order = useMemo(() => orderIngredients(currentOrder, ingredients), [currentOrder, ingredients]);

    // useEffect(() => {
    //     order =
    //         currentOrder &&
    //         currentOrder.ingredients.reduce((arr: Array<TIngredient>, ingredientID) => {
    //             for (const item of arr) {
    //                 if (item._id === ingredientID) {
    //                     item.ingredientCount += 1;
    //                     return arr;
    //                 }
    //             }
    //             const currentIngredient = ingredients.find(
    //                 (ingredient: TIngredient) => ingredient._id === ingredientID,
    //             );
    //             currentIngredient.ingredientCount += 1;
    //             arr.push(currentIngredient);
    //
    //             return arr;
    //         }, []);
    // }, [currentOrder]);

    return currentOrder ? (
        <div className={styles.main}>
            <p className={`text text_type_main-default mb-10 ${styles.number}`}>#{currentOrder.number}</p>
            <h3 className="text text_type_main-medium mb-3">{currentOrder.name}</h3>
            <p className={`text text_type_main-default mb-15 ${styles.status}`}>{orderStatus}</p>
            <p className="text text_type_main-medium mb-6" onClick={() => console.log(order)}>
                Состав:
            </p>
            <div className={styles.order}>
                <div className={`pr-6 ${styles.ingredients}`}>
                    {order &&
                        order.map((ingredient, i) => (
                            <OrderIngredient
                                key={i}
                                name={ingredient.name}
                                price={ingredient.price}
                                count={ingredient.ingredientCount}
                                index={i}
                                image={ingredient.image}
                            />
                        ))}
                </div>
                <div className={`mt-10 ${styles.data}`}>
                    <p className={`text text_type_main-default text_color_inactive`}>
                        {dataFunc(currentOrder.createdAt)}
                    </p>
                    <p className={`text text_type_digits-default ${styles.price}`}>
                        {orderSumFunc(currentOrder.ingredients, ingredients)}
                        <span className="ml-2">
                            <CurrencyIcon type="primary" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    ) : null;
};
