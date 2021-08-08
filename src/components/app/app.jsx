import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import { HomePage, LoginPage, NotFoundPage } from "../../pages";

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
