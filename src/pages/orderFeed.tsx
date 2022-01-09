import React, { SyntheticEvent } from 'react';

import Feed from '../components/feed/feed';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Modal from '../components/modal/modal';
import { TLocationState } from '../components/app/app-types';
import { OrderPage } from './order';

export function OrderFeedPage() {
    const history = useHistory();
    const location: TLocationState = useLocation();
    const action = history.action === 'PUSH' || history.action === 'REPLACE';
    const modalIngredientOpen = action && location.state && location.state.background;

    const back = (e: KeyboardEvent | SyntheticEvent) => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <>
            <Feed />
            {modalIngredientOpen && (
                <Route path="/feed/:id">
                    <Modal onClose={back}>
                        <OrderPage />
                    </Modal>
                </Route>
            )}
        </>
    );
}
