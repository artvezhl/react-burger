import React, { useState, useEffect } from 'react';
import appStyles from './app.module.css';

import { URL } from '../../constants';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details";
import IngredientDetails from "../modal/ingredient-details";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [visible, setVisible] = useState(false);
    const [ingredientsDetails, setIngredientsDetails] = useState({});

    useEffect(() => {
        const ingredientsData = async () => {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                setData(data.data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                setHasError(true);
                console.log(e);
            }
        }

        ingredientsData();
    }, []);

    useEffect(() => {

    });

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = (e) => {
        setVisible(false);
        setIngredientsDetails({});
    }

    return (
      <>
        <AppHeader/>
        { isLoading && <div className={`text text_type_main-large ${appStyles.centered}`}>Loading...</div>}
        { hasError &&
            <div className={`text text_type_main-large ${appStyles.centered}`}>Something wrong<br/>We have no data to render ingredients</div>
        }
        { !isLoading && !hasError &&
            <main className={appStyles.main}>
                <BurgerIngredients data={ data } setDetailsData={setIngredientsDetails} openModal={ openModal } />
                <BurgerConstructor onClick={ openModal } />
            </main>
        }
        { visible &&
            <Modal
                title={Object.keys(ingredientsDetails).length? 'Детали ингредиента' : null}
                onClose={ closeModal }
            >
                { Object.keys(ingredientsDetails).length ?
                    <IngredientDetails {...ingredientsDetails}/> :
                    <OrderDetails/>
                }
            </Modal>
        }
      </>
    );
}

export default App;
