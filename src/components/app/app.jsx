import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    ProfilePage
} from "../../pages";

function App() {
    return (
        <>
        <Router>
            <AppHeader/>
            <main className={styles.main}>
                    <Switch>
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
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
            </main>
        </Router>
        </>
    );
}

export default App;
