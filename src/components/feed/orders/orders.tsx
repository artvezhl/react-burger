import React, { FC } from 'react';

import styles from './orders.module.css';
import { TFeedOrder } from '../feed';

type TOrdersProps = {
    total: number;
    totalToday: number;
    orders: Array<TFeedOrder>;
};

const Orders: FC<TOrdersProps> = ({ total, totalToday, orders }) => {
    const readyOrders = orders.filter((order) => order.status === 'done').slice(0, 5);
    const cookingOrders = orders.filter((order) => order.status !== 'done');

    // useEffect(() => {
    //     console.log(readyOrders);
    // }, [readyOrders]);

    return (
        <section className={styles.main}>
            <div className="mr-9">
                <h4 className="text text_type_main-medium">Готовы:</h4>
                <ul className={styles.orders__list}>
                    {readyOrders.map((order, index) => (
                        <li key={index} className={`text text_type_digits-default ${styles.orders__item_done}`}>
                            {order.number}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.orders}>
                <h4 className="text text_type_main-medium">В работе:</h4>
                <ul className={styles.orders__list}>
                    {cookingOrders.map((order, index) => (
                        <li key={index} className={`text text_type_digits-default ${styles.orders__item}`}>
                            {order.number}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text text_type_main-medium mt-10 mb-10">
                Выполнено за все время <br />
                <span className={`text text_type_digits-large ${styles.digits_shadow}`}>{total}</span>
            </div>
            <div className="text text_type_main-medium">
                Выполнено за сегодня <br />
                <span className={`text text_type_digits-large ${styles.digits_shadow}`}>{totalToday}</span>
            </div>
        </section>
    );
};

export default Orders;
