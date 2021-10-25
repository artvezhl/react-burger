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
            const dragIngredient = state.ingredients.filter(i => i.index === action.index)[0];
            const newIngredients = [...state.ingredients];
            newIngredients.splice(action.index, 1);
            newIngredients.splice(action.atIndex, 0, dragIngredient);

            return {
                ...state,
                ingredients: newIngredients,
            }
        }
        default: {
            return state;
        }

    }
}
