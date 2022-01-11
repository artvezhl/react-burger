import React, { ReactElement, useEffect } from 'react';

import styles from './profile-history.module.css';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../../services/action-types/wsActionTypes';
import { useDispatch, useSelector } from '../../../services/hooks';
import { getCookie } from '../../../utils';
import FeedOrder from '../../feed/feed-order/feed-order';
import { TFeedOrder } from '../../feed/feed';
import { WS_URL } from '../../../services/constants';

const ProfileHistory = (): ReactElement => {
    const orders = useSelector((store) => store.userFeed.orders);
    const accessToken = getCookie('accessToken');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: { url: `${WS_URL}?token=${accessToken}` },
        });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, []);

    const content = !orders
        ? null
        : orders.map(({ _id, number, name, createdAt, ingredients }: TFeedOrder) => (
              <FeedOrder key={_id} id={_id} number={number} name={name} date={createdAt} ingredientsIDs={ingredients} />
          ));

    return <div className={styles.main}>{content}</div>;
};

export default ProfileHistory;
