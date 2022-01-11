import React, { ReactElement, useEffect } from 'react';

import feedStyles from './feed.module.css';
import FeedOrder from './feed-order/feed-order';
import Orders from './orders/orders';
import { useSelector } from '../../services/hooks';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../services/action-types/wsActionTypes';

export type TFeedOrder = {
    _id: string;
    ingredients: Array<string>;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
};

const Feed = (): ReactElement => {
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

    const content = !orders
        ? null
        : orders.map(({ _id, number, name, createdAt, ingredients }: TFeedOrder) => (
              <FeedOrder key={_id} id={_id} number={number} name={name} date={createdAt} ingredientsIDs={ingredients} />
          ));

    return (
        <div className={feedStyles.main}>
            <h2 className="text text_type_main-large pt-10">Лента заказов</h2>
            <div className={feedStyles.orders}>
                <div className={feedStyles.list}>{content}</div>
                <Orders total={total} totalToday={totalToday} orders={orders} />
            </div>
        </div>
    );
};

export default Feed;
