import React from 'react';

import appStyles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
    return (
        <>
            <AppHeader/>
            <main className={appStyles.main}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </>
    );
}

export default App;
