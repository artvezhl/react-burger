import React, { ReactElement, SyntheticEvent, useEffect } from 'react';

import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import ProtectedRoute from '../protected-route/ProtectedRoute';
import {
    HomePage,
    LoginPage,
    RegisterPage,
    NotFoundPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    ProfilePage,
    Ingredient,
    OrderFeedPage,
    OrderPage,
} from '../../pages';
import Modal from '../modal/modal';
import { useDispatch } from '../../services/hooks';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getUserInfo } from '../../services/actions/auth';
import { getCookie } from '../../utils';
import { getIngredients } from '../../services/actions/burger-ingredients';
import { TLocationState } from './app-types';
import { DEPLOY_URL } from '../../services/constants';

const App = (): ReactElement => {
    const history = useHistory();
    const location: TLocationState = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getCookie('accessToken');
        dispatch(getIngredients());
        dispatch(getUserInfo(token));
    }, [dispatch]);

    const back = (e: KeyboardEvent | SyntheticEvent) => {
        e.stopPropagation();
        history.goBack();
    };

    const action = history.action === 'PUSH' || history.action === 'REPLACE';
    const modalOpen = action && location.state && location.state.background;

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <Switch location={modalOpen || location}>
                    <Route path={`/${DEPLOY_URL}`} exact={true} component={HomePage} />
                    <ProtectedRoute path={`/${DEPLOY_URL}login`} exact={true}>
                        <LoginPage />
                    </ProtectedRoute>
                    <ProtectedRoute path={`/${DEPLOY_URL}register`} exact={true}>
                        <RegisterPage />
                    </ProtectedRoute>
                    <ProtectedRoute path={`/${DEPLOY_URL}forgot-password`} exact={true}>
                        <ForgotPasswordPage />
                    </ProtectedRoute>
                    <ProtectedRoute path={`/${DEPLOY_URL}reset-password`} exact={true}>
                        <ResetPasswordPage />
                    </ProtectedRoute>
                    <ProtectedRoute path={`/${DEPLOY_URL}profile`} exact={true}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <ProtectedRoute path={`/${DEPLOY_URL}profile/orders`} exact={true}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route path={`/${DEPLOY_URL}ingredients/:id`} exact={true} component={Ingredient} />
                    <Route path={`/${DEPLOY_URL}feed`} exact={true} component={OrderFeedPage} />
                    <Route path={`/${DEPLOY_URL}feed/:id`} exact={true} component={OrderPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                {modalOpen && (
                    <Route path={`/${DEPLOY_URL}ingredients/:id`}>
                        <Modal onClose={back}>
                            <IngredientDetails />
                        </Modal>
                    </Route>
                )}
                {modalOpen && (
                    <Route path={`/${DEPLOY_URL}feed/:id`}>
                        <Modal onClose={back}>
                            <OrderPage />
                        </Modal>
                    </Route>
                )}
                {modalOpen && (
                    <Route path={`/${DEPLOY_URL}profile/:id`}>
                        <Modal onClose={back}>
                            <OrderPage />
                        </Modal>
                    </Route>
                )}
            </main>
        </>
    );
};

export default App;
