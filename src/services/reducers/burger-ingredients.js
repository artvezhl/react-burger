import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_ACTIVE_TAB,
} from '../actions/burger-ingredients';

const initialState = {
    items: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    activeTab: 'Булки',
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                items: action.ingredients,
                ingredientsRequest: false,
                ingredientsFailed: false,
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsFailed: true,
            };
        }
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                activeTab: action.tab,
            }
        }
        default: {
            return state;
        }
    }
}
