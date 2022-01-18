import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_TOTAL,
    SET_INGREDIENT_INDEX,
    SET_INGREDIENTS_IDS,
    MOVE_CARD,
} from '../constants';
import { TIngredient } from '../../components/burger-ingredients/ingredient/ingredient-types';

export interface IAddComponent {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient;
}

export interface IRemoveIngredient {
    readonly type: typeof REMOVE_INGREDIENT;
    readonly id: string;
    readonly index: number;
}

export interface ISetTotal {
    readonly type: typeof SET_TOTAL;
    readonly total: number;
}

export interface ISetIngredientIndex {
    readonly type: typeof SET_INGREDIENT_INDEX;
}

export interface ISetIngredientsIDs {
    readonly type: typeof SET_INGREDIENTS_IDS;
    readonly IDs: Array<string>;
}

export interface IMoveCard {
    readonly type: typeof MOVE_CARD;
    readonly index: number;
    readonly atIndex: number;
}

export type TConstructorListActions =
    | IAddComponent
    | IRemoveIngredient
    | ISetTotal
    | ISetIngredientIndex
    | ISetIngredientsIDs
    | IMoveCard;
