import React, { ReactElement, SyntheticEvent, useEffect } from 'react';

import Feed from '../components/feed/feed';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Modal from '../components/modal/modal';
import { TLocationState } from '../components/app/app-types';
import { OrderPage } from './order';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/action-types/wsActionTypes';
import { useDispatch } from 'react-redux';

export const OrderFeedPage = (): ReactElement => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location: TLocationState = useLocation();
    const action = history.action === 'PUSH' || history.action === 'REPLACE';
    const modalOrderOpen = action && location.state && location.state.background;

    useEffect(() => {
        // console.log('modalOrderOpen is ', modalOrderOpen);
        // console.log('modalOrderOpen action is ', action);
        console.log('orderlocation is ', location);
    }, [location]);

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: { url: 'wss://norma.nomoreparties.space/orders/all' } });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, []);

    const back = (e: KeyboardEvent | SyntheticEvent) => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <>
            <Feed />
            {modalOrderOpen && (
                <Route path="/feed/:id">
                    <Modal onClose={back}>
                        <OrderPage />
                    </Modal>
                </Route>
            )}
        </>
    );
};
