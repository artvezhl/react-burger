import React from 'react';
import appStyles from './App.module.css';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import IdPopup from "../popups/id-popup";

function App() {
  return (
      <>
        <main className={appStyles.main}>
            <AppHeader/>
            <BurgerIngredients />
            <BurgerConstructor/>
        </main>
        <IdPopup/>
      </>
  );
}

export default App;
