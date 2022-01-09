import React, { useEffect } from 'react';

import styles from './profile-history.module.css';
import FeedOrder from '../../feed/feed-order/feed-order';
import { useDispatch, useSelector } from '../../../services/hooks';
// import { getOwnerFeedOrders, WS_CONNECTION_START } from '../../../services/action-types/wsActionTypes';

const ProfileHistory = () => {
    const wsStatus = useSelector((store) => store.feed.wsConnected);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: WS_CONNECTION_START });
    // }, []);
    //
    // useEffect(() => {
    //     console.log(wsStatus);
    //     wsStatus && dispatch(getOwnerFeedOrders());
    // }, [wsStatus]);

    return (
        <div className={styles.main}>
            jgknrkejngrek
            {/*<FeedOrder />*/}
            {/*<FeedOrder />*/}
            {/*<FeedOrder />*/}
            {/*<FeedOrder />*/}
            {/*<FeedOrder />*/}
            {/*<FeedOrder />*/}
            {/*<FeedOrder />*/}
        </div>
    );
};

export default ProfileHistory;
