import React from 'react';
import appStyles from './App.css';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
      <div className="root__section">
        <AppHeader/>
        <main className="main">
            <BurgerIngredients />
            <BurgerConstructor/>
        </main>
      </div>
  );
}

export default App;
