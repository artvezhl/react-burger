import React, { useState, useEffect } from 'react';
import appStyles from './app.module.css';

import { URL } from '../../constants';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const ingredientsData = async () => {
            try {
                const res = await fetch(URL);
                if (res.ok) {
                    const data = await res.json();
                    setData(data.data);
                    setIsLoading(false);
                } else {
                    throw Error('something wrong');
                }
            } catch (e) {
                setIsLoading(false);
                setHasError(true);
                console.log(e);
            }
        }

        ingredientsData();
    }, []);

    return (
      <>
        <AppHeader/>
        { isLoading && <div className={`text text_type_main-large ${appStyles.centered}`}>Loading...</div>}
        { hasError &&
            <div className={`text text_type_main-large ${appStyles.centered}`}>Something wrong<br/>We have no data to render ingredients</div>
        }
        { !isLoading && !hasError &&
            <main className={appStyles.main}>
                <BurgerIngredients data={ data }/>
                <BurgerConstructor/>
            </main>
        }
      </>
    );
}

export default App;
