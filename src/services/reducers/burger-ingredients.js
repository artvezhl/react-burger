import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_ACTIVE_TAB,
    INCREASE_INGREDIENT_COUNT,
    DECREASE_INGREDIENT_COUNT,
} from '../actions/burger-ingredients';

const initialState = {
    ingredients: [],
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
                ingredients: action.ingredients.map(ingredient => ({
                    ...ingredient,
                    ingredientCount: 0,
                })),
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
        case INCREASE_INGREDIENT_COUNT: {
            return {
                ...state,
                ingredients: state.ingredients.map(ingredient => {
                    if (ingredient._id === action.ingredientId) {
                        return {
                            ...ingredient,
                            ingredientCount: ingredient.ingredientCount += 1,
                        }
                    }
                    return ingredient;
                })
            }
        }
        case DECREASE_INGREDIENT_COUNT: {
            return {
                ...state,
                ingredients: state.ingredients.map(ingredient => {
                    if (ingredient._id === action.ingredientId) {
                        return {
                            ...ingredient,
                            ingredientCount: ingredient.ingredientCount -= 1,
                        }
                    }
                    return ingredient;
                })
            }
        }
        default: {
            return state;
        }
    }
}
