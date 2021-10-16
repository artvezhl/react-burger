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
                        {/*<ProtectedRoute path="/profile">*/}
                        <Route path="/profile" exact={true}>
                            <ProfilePage />
                        </Route>
                        {/*</ProtectedRoute>*/}
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
