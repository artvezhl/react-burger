import { TIngredient } from "../ingredient/ingredient-types";

export type TIngredientsProps = {
    data: Array<TIngredient>
};

export type TTabScrollChange = (
    inView: any,
    entry: any
) => void;
