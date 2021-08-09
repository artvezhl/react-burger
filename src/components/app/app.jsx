import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import {
    HomePage,
    LoginPage,
    RegisterPage,
    NotFoundPage,
    ForgotPasswordPage,
    ResetPasswordPage
} from "../../pages";

function App() {
    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <Router>
                    <Switch>
                        <Route path="/" exact={true}>
                            <HomePage />
                        </Route>
                        <Route path="/login" exact={true}>
                            <LoginPage />
                        </Route>
                        <Route path="/register" exact={true}>
                            <RegisterPage />
                        </Route>
                        <Route path="/forgot-password" exact={true}>
                            <ForgotPasswordPage />
                        </Route>
                        <Route path="/reset-password" exact={true}>
                            <ResetPasswordPage />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </Router>
            </main>

        </>
    );
}

export default App;
