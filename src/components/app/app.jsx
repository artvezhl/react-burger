import React, { useEffect } from 'react';
import appStyles from './app.module.css';

import { URL } from '../../constants';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
// import IdPopup from "../popups/id-popup";
import Modal from "../modal/modal";
import ModalOverlay from "../modal/modal-overlay";

function App() {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

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
    }, [])

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
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
                <BurgerIngredients data={ data } />
                <BurgerConstructor onClick={ openModal } />
            </main>
        }
        { visible &&
            <ModalOverlay>
                <Modal title={'Детали ингредиента'} onClose={ closeModal }/>
            </ModalOverlay>
        }
      </>
    );
}

export default App;
