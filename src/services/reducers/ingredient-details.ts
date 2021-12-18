import { SET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from '../constants';
import { TIngredientDetailsActions } from '../actions/ingredient-details';
import { TIngredientDetails } from '../actions/ingredient-details';

type TIngredientDetailsState = TIngredientDetails;

const IngredientInitialState = {
    image_large: '',
    name: '',
    calories: '',
    proteins: '',
    fat: '',
    carbohydrates: '',
};

export const ingredientDetailsReducer = (
    state = IngredientInitialState,
    action: TIngredientDetailsActions,
): TIngredientDetailsState => {
    switch (action.type) {
        case SET_INGREDIENT_DETAILS: {
            return {
                ...action.details,
            };
        }
        case REMOVE_INGREDIENT_DETAILS: {
            return IngredientInitialState;
        }
        default: {
            return state;
        }
    }
};
