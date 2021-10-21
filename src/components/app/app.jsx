import React, {useCallback, useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory, useLocation} from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import { ProtectedRoute } from "../protected-route/ProtectedRoute";
import {
    HomePage,
    LoginPage,
    RegisterPage,
    NotFoundPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    ProfilePage,
    Ingredient
} from "../../pages";
import Modal from "../modal/modal";
import {RESET_ORDER_NUMBER} from "../../services/actions/order-details";
import {useDispatch, useSelector} from "react-redux";
import {
    REMOVE_INGREDIENT_DETAILS,
    SET_INGREDIENT_DETAILS,
    SET_MODAL_CLOSE
} from "../../services/actions/ingredient-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {getCookie} from "../../utils";
import {getUserInfo} from "../../services/api";
import {SET_USER} from "../../services/actions/auth";

function App() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getCookie('accessToken');
        if (token) {
            getUserInfo(token)
                .then(data => {
                    if (data.success) {
                        dispatch({
                            type: SET_USER,
                            user: data.user
                        });
                    }
                })
                .catch(err => console.log('err - ', err.message))
        }

    }, [dispatch]);

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    const action = history.action ==='PUSH' || history.action ==='REPLACE';
    const modalIngredientOpen = action && location.state && location.state.background;

    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <Switch location={modalIngredientOpen  || location}>
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
                {modalIngredientOpen && (<Route path="/ingredients/:id">
                    <Modal onClose={back}>
                        <IngredientDetails />
                    </Modal>
                </Route>)}
            </main>
        </>
    );
}

export default App;
