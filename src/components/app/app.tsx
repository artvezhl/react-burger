import React, { SyntheticEvent, useEffect } from 'react';

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
} from '../../pages';
import Modal from '../modal/modal';
import { useDispatch } from '../../services/hooks';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getUserInfo } from '../../services/actions/auth';
import { getCookie } from '../../utils';
import { getIngredients } from '../../services/actions/burger-ingredients';
import { TLocationState } from './app-types';

function App() {
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
    const modalIngredientOpen = action && location.state && location.state.background;

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <Switch location={modalIngredientOpen || location}>
                    <Route path="/" exact={true}>
                        <HomePage />
                    </Route>
                    <ProtectedRoute path="/login" exact={true}>
                        <LoginPage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/register" exact={true}>
                        <RegisterPage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/forgot-password" exact={true}>
                        <ForgotPasswordPage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/reset-password" exact={true}>
                        <ResetPasswordPage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile" exact={true}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route path="/ingredients/:id" exact={true}>
                        <Ingredient />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
                {modalIngredientOpen && (
                    <Route path="/ingredients/:id">
                        <Modal onClose={back}>
                            <IngredientDetails />
                        </Modal>
                    </Route>
                )}
            </main>
        </>
    );
}

export default App;
