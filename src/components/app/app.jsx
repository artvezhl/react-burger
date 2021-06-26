import React, {useState, useEffect, useReducer} from 'react';
import appStyles from './app.module.css';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { URL } from '../../constants';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { rootReducer } from "../../services/reducers";
import { ConstructorContext } from "../../services/constructorContext";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const initialConstructorState = {};

const constructorReducer = (state = initialConstructorState, action) => {
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
        case 'ingredients':
            return  {
                ...state,
                ingredientsIDs: action.payload,
            }
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [constructorState, constructorDispatcher] = useReducer(
        constructorReducer,
        initialConstructorState
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
