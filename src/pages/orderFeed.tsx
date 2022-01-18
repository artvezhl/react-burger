import React, { ReactElement, useEffect } from 'react';

import Feed from '../components/feed/feed';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/action-types/wsActionTypes';
import { useDispatch } from 'react-redux';
import feedStyles from '../components/feed/feed.module.css';
import Orders from '../components/feed/orders/orders';
import { useSelector } from '../services/hooks';

export const OrderFeedPage = (): ReactElement => {
    const dispatch = useDispatch();
    const orders = useSelector((store) => store.feed.orders);
    const { total, totalToday } = useSelector((store) => ({
        total: store.feed.total,
        totalToday: store.feed.totalToday,
    }));

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: { url: 'wss://norma.nomoreparties.space/orders/all' } });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, []);

    return (
        <div className={feedStyles.main}>
            <h2 className="text text_type_main-large pt-10">Лента заказов</h2>
            <div className={feedStyles.orders}>
                <Feed />
                <Orders total={total} totalToday={totalToday} orders={orders} />
            </div>
        </div>
    );
};
