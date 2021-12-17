import { TIngredient } from "../../components/burger-ingredients/ingredient/ingredient-types";

export type CommonStateType = {
    ingredients: any;
    burger: BurgerConstructorTypes;
    details: any;
    order: any;
    auth: UserAuthTypes;
}

export type BurgerConstructorTypes = {
    bun: TIngredient,
    ingredients: Array<TIngredient>,
    total: number;
    ingredientIDs: Array<string>,
};

export type UserAuthTypes = {
    user: null | {
        email: string;
        name: string;
    };
    userDataRequest: boolean;
    userDataFailed: boolean;
    passwordReset: boolean;
};
