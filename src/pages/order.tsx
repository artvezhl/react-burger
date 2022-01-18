import React, { ReactElement, useEffect, useState } from 'react';

import styles from './order.module.css';
import OrderIngredient from '../components/order-ingredient/order-ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import { dataFunc, orderSumFunc, orderIngredients } from '../utils';
import { TIngredientDetailsParams } from '../components/ingredient-details/ingredient-details-types';
import { TFeedOrder } from '../components/feed/feed';
import { useDispatch, useSelector } from '../services/hooks';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/action-types/wsActionTypes';
import { WS_URL } from '../services/constants';
import { TIngredient } from '../components/burger-ingredients/ingredient/ingredient-types';

export const OrderPage = (): ReactElement | null => {
    const ingredients = useSelector((store) => store.ingredients.ingredients);
    const currentOrders = useSelector((store) => store.feed.orders);
    const dispatch = useDispatch();
    const [currentOrder, setCurrentOrder] = useState<TFeedOrder | null>();
    const [isIngredientsCount, setIsIngredientsCount] = useState<boolean>(false);
    const { id } = useParams<TIngredientDetailsParams>();
    const [order, setOrder] = useState<TIngredient[]>();

    const orderStatus =
        currentOrder &&
        (currentOrder.status === 'done' ? 'Выполнен' : currentOrder.status === 'created' ? 'Создан' : 'Готовится');

    useEffect(() => {
        setCurrentOrder(currentOrders.filter((item: TFeedOrder) => item._id === id)[0]);
        return () => setCurrentOrder(null);
    }, [currentOrders, id]);

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: { url: `${WS_URL}/all` } });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);

    useEffect(() => {
        if (currentOrder && !isIngredientsCount) {
            const ingredientsOfOrder = orderIngredients(currentOrder, ingredients);
            if (ingredientsOfOrder && ingredientsOfOrder.length) setOrder(ingredientsOfOrder);
            setIsIngredientsCount(true);
        }
    }, [currentOrder]);

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
                                count={ingredient.ingredientOrderCount}
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
