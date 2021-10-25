import {
    SET_INGREDIENT_DETAILS,
    REMOVE_INGREDIENT_DETAILS
} from '../actions/ingredient-details';

const initialState = {
    image_large: '',
    name: '',
    calories: '',
    proteins: '',
    fat: '',
    carbohydrates: '',
};

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENT_DETAILS: {
            return {
                ...action.details,
            };
        }
        case REMOVE_INGREDIENT_DETAILS: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
