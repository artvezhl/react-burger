import { TIngredient } from "../../components/burger-ingredients/ingredient/ingredient-types";

export type CommonStateType = {
    ingredients: any;
    burger: burgerConstructorTypes;
    details: any;
    order: any;
    auth: userAuthTypes;
}

export type burgerConstructorTypes = {
    bun: TIngredient,
    ingredients: Array<TIngredient>,
    total: number;
    ingredientIDs: Array<string>,
};

export type userAuthTypes = {
    user: null | {
        email: string;
        name: string;
    };
    userDataRequest: boolean;
    userDataFailed: boolean;
    passwordReset: boolean;
};
