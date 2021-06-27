import { combineReducers } from 'redux';

import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { ingredientDetailsReducer } from './ingredient-details';

// import { RENDER_INGREDIENTS, GET_INGREDIENTS_IDS, GET_ORDER_NUMBER, GET_TOTAL_AMOUNT } from '../actions';
//
//
// const initialState = {
//     ingredients: [],
//     ingredientsRequest: false,
//     ingredientsFailed: false,
//     constructorIngredients: [],
//     currentIngredient: {},
//     order: null,
// };

// const constructorReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case RENDER_INGREDIENTS:
//             return action.payload;
//         case GET_TOTAL_AMOUNT:
//             return {
//                 ...state,
//                 total: action.payload,
//             }
//         case GET_ORDER_NUMBER:
//             return {
//                 ...state,
//                 orderNumber: action.payload,
//             }
//         case GET_INGREDIENTS_IDS:
//             return  {
//                 ...state,
//                 ingredientsIDs: action.payload,
//             }
//         default:
//             return state;
//     }
// }

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: constructorReducer,
    details: ingredientDetailsReducer,
})
