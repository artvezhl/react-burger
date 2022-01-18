import { SET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from '../constants';

export type TIngredientDetails = {
    image_large: string;
    name: string;
    calories: string;
    proteins: string;
    fat: string;
    carbohydrates: string;
};

export interface ISetIngredientDetails {
    readonly type: typeof SET_INGREDIENT_DETAILS;
    readonly details: TIngredientDetails;
}

export interface IRemoveIngredientDetails {
    readonly type: typeof REMOVE_INGREDIENT_DETAILS;
}

export type TIngredientDetailsActions = ISetIngredientDetails | IRemoveIngredientDetails;
