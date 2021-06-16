import React, {useState, useEffect, useReducer} from 'react';
import appStyles from './app.module.css';

import { URL } from '../../constants';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { ConstructorContext } from "../../services/constructorContext";

const initialConstructorState = {};

const constructorReducer = (state, action) => {
    switch (action.type) {
        case 'render':
            return action.payload;
        case 'total':
            return {
                ...state,
                total: action.payload,
            }
        case 'order':
            return {
                ...state,
                orderNumber: action.payload,
            }
    }
}

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    // const [constructorState, setConstructorState] = useState({});
    const [constructorState, constructorDispatcher] = useReducer(
        constructorReducer,
        initialConstructorState,
        undefined
    );

    useEffect(() => {
        const ingredientsData = async () => {
            try {
                const res = await fetch(URL);
                if (res.ok) {
                    const data = await res.json();
                    setData(data.data);
                    constructorDispatcher({
                        type: 'render',
                        payload: {
                            ingredients: data.data,
                            bunName: 'Краторная булка N-200i',
                            total: 0,
                            orderNumber: 0
                        },
                    });
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
        <ConstructorContext.Provider value={{ constructorState, constructorDispatcher }}>
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
        </ConstructorContext.Provider>
      </>
    );
}

export default App;
