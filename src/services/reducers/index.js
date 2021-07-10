import { combineReducers } from 'redux';

import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './constructor-list';
import { ingredientDetailsReducer } from './ingredient-details';
import { orderDetailsReducer } from "./order-details";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: constructorReducer,
    details: ingredientDetailsReducer,
    order: orderDetailsReducer,
})