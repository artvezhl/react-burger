import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import { HomePage, LoginPage } from "../../pages";

function App() {
    return (
        <>
            <AppHeader/>
            <Router>
                <Route path="/" exact={true}>
                    <HomePage />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginPage />
                </Route>
            </Router>
        </>
    );
}

export default App;
