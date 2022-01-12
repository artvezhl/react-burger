import React, { ReactElement } from 'react';

import feedStyles from './feed.module.css';
import FeedOrder from './feed-order/feed-order';
import { useSelector } from '../../services/hooks';

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
    const orders = useSelector((store) => store.feed.orders);

    const content = !orders
        ? null
        : orders.map(({ _id, number, name, createdAt, ingredients }: TFeedOrder) => (
              <FeedOrder key={_id} id={_id} number={number} name={name} date={createdAt} ingredientsIDs={ingredients} />
          ));

    return <div className={feedStyles.list}>{content}</div>;
};

export default Feed;
