import React from 'react';

import feedStyles from './feed.module.css';
import FeedOrder from './feed-order/feed-order';
import Orders from './orders/orders';

export default function Feed() {
    return (
        <div className={feedStyles.main}>
            <h2 className="text text_type_main-large pt-10">Лента заказов</h2>
            <div className={feedStyles.orders}>
                <div className={feedStyles.list}>
                    <FeedOrder />
                    <FeedOrder />
                    <FeedOrder />
                    <FeedOrder />
                    <FeedOrder />
                    <FeedOrder />
                    <FeedOrder />
                </div>
                <Orders />
            </div>
        </div>
    );
}
