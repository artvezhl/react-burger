import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_TOTAL,
    SET_INGREDIENT_INDEX,
    SET_INGREDIENTS_IDS,
    MOVE_CARD,
} from '../constants';
import { TIngredient } from '../../components/burger-ingredients/ingredient/ingredient-types';
import { TConstructorListActions } from '../actions/constructor-list';

type TConstructorInitialState = {
    bun: TIngredient | unknown;
    ingredients: Array<TIngredient>;
    total: number;
    ingredientIDs: Array<string>;
};

const ConstructorInitialState = {
    bun: {},
    ingredients: [],
    total: 0,
    ingredientIDs: [],
};

export const constructorReducer = (
    state = ConstructorInitialState,
    action: TConstructorListActions,
): TConstructorInitialState => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            if (action.ingredient.type === 'bun') {
                return {
                    ...state,
                    bun: action.ingredient,
                };
            }
            return {
                ...state,
                ingredients: (state.ingredients as Array<TIngredient>).concat(action.ingredient),
            };
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter((ingredient: TIngredient) => {
                    return ingredient._id === action.id && ingredient.index === action.index ? null : ingredient;
                }),
            };
        }
        case SET_TOTAL: {
            return {
                ...state,
                total: action.total,
            };
        }
        case SET_INGREDIENT_INDEX: {
            return {
                ...state,
                ingredients: state.ingredients.map((ingredient: TIngredient, index) => ({
                    ...ingredient,
                    index: index,
                })),
            };
        }
        case SET_INGREDIENTS_IDS: {
            return {
                ...state,
                ingredientIDs: action.IDs,
            };
        }
        case MOVE_CARD: {
            const dragIngredient = state.ingredients.filter((i: TIngredient) => i.index === action.index)[0];
            const newIngredients = [...state.ingredients];
            newIngredients.splice(action.index, 1);
            newIngredients.splice(action.atIndex, 0, dragIngredient);

            return {
                ...state,
                ingredients: newIngredients,
            };
        }
        default: {
            return state;
        }
    }
};
