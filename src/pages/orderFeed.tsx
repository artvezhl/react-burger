import React, { ReactElement, SyntheticEvent, useEffect } from 'react';

import Feed from '../components/feed/feed';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Modal from '../components/modal/modal';
import { TLocationState } from '../components/app/app-types';
import { OrderPage } from './order';

export const OrderFeedPage = (): ReactElement => {
    const history = useHistory();
    const location: TLocationState = useLocation();
    const action = history.action === 'PUSH' || history.action === 'REPLACE';
    const modalOrderOpen = action && location.state && location.state.background;

    useEffect(() => {
        // console.log('modalOrderOpen is ', modalOrderOpen);
        // console.log('modalOrderOpen action is ', action);
        console.log('orderlocation is ', location);
    }, [location]);

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
                        <OrderPage
                            number={4}
                            name={'Флюоресцентная булка R2-D3'}
                            date={'2022-01-09T19:53:17.161Z'}
                            ingredientsIDs={[
                                '60d3b41abdacab0026a733c6',
                                '60d3b41abdacab0026a733c6',
                                '60d3b41abdacab0026a733c6',
                            ]}
                        />
                    </Modal>
                </Route>
            )}
        </>
    );
};
