import React from 'react';
import appStyles from './App.module.css';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import IdPopup from "../popups/id-popup";

function App() {
    const [visible, setVisible] = React.useState(false);

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
    }

    return (
      <>
        <main className={appStyles.main}>
            <AppHeader/>
            <BurgerIngredients />
            <BurgerConstructor onClick={openModal} />
        </main>
        { visible && <IdPopup onClose={closeModal}/> }
      </>
    );
}

export default App;
