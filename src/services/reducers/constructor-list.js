import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_TOTAL,
    SET_INGREDIENTS_IDS
} from "../actions/constructor-list";

const initialState = {
    bun: {},
    ingredients: [],
    total: 0,
    ingredientIDs: [],
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            if (action.ingredient.type === 'bun') {
                return {
                    ...state,
                    bun: action.ingredient,
                }
            }
            return {
                ...state,
                ingredients: state.ingredients.concat(action.ingredient),
            }
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient._id !== action.id),
            }
        }
        case SET_TOTAL: {
            return {
                ...state,
                total: action.total,
            }
        }
        case SET_INGREDIENTS_IDS: {
            return {
                ...state,
                ingredientIDs: action.IDs,
            }
        }
        default: {
            return state;
        }

    }
}
