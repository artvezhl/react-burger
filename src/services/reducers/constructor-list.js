import update from 'immutability-helper';
import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_TOTAL,
    SET_INGREDIENT_INDEX,
    SET_INGREDIENTS_IDS,
    MOVE_CARD
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
                ingredients: state.ingredients.filter(ingredient => {
                    return (ingredient._id === action.id && ingredient.index === action.index)
                        ? null
                        : ingredient
                }),
            }
        }
        case SET_TOTAL: {
            return {
                ...state,
                total: action.total,
            }
        }
        case SET_INGREDIENT_INDEX: {
            return {
                ...state,
                ingredients: state.ingredients.map((ingredient, index) => ({
                    ...ingredient,
                    index: index,
                })),
            }
        }
        case SET_INGREDIENTS_IDS: {
            return {
                ...state,
                ingredientIDs: action.IDs,
            }
        }
        case MOVE_CARD: {
            return {
                ...state,
                // ingredients: update(state.ingredients, {
                //     $splice: [
                //         [action.index, 1],
                //         [action.atIndex, 0, action.card],
                //     ]}),
                ingredients: action.ingredients,
            }
        }
        default: {
            return state;
        }

    }
}
