import React from 'react';
import appStyles from './App.module.css';

import { data } from '../../utils/data';
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
        <AppHeader/>
        <main className={appStyles.main}>
            <BurgerIngredients data={ data } />
            <BurgerConstructor onClick={openModal} />
        </main>
        { visible && <IdPopup onClose={closeModal}/> }
      </>
    );
}

export default App;
