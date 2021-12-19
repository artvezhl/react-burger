import {
    REQUEST_URL,
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_ACTIVE_TAB,
    INCREASE_INGREDIENT_COUNT,
    DECREASE_INGREDIENT_COUNT,
} from '../constants';
import { AppThunk, AppDispatch } from '../thunk-types';
import { TIngredient } from '../../components/burger-ingredients/ingredient/ingredient-types';

export interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS;
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: Array<TIngredient>;
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface ISetActiveTab {
    readonly type: typeof SET_ACTIVE_TAB;
    readonly tab: string;
}

export interface IIncreaseIngredientCount {
    readonly type: typeof INCREASE_INGREDIENT_COUNT;
    readonly ingredientId: string;
}

export interface IDecreaseIngredientCount {
    readonly type: typeof DECREASE_INGREDIENT_COUNT;
    readonly ingredientId: string;
}

export type TBurgerIngredientsActions =
    | IGetIngredients
    | IGetIngredientsSuccess
    | IGetIngredientsFailed
    | ISetActiveTab
    | IIncreaseIngredientCount
    | IDecreaseIngredientCount;

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: GET_INGREDIENTS,
    });

    fetch(REQUEST_URL + '/ingredients')
        .then((res) => {
            if (res && res.ok) {
                res.json().then((res) => {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredients: res.data,
                    });
                });
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                });
            }
        })
        .catch((e) => {
            dispatch({
                type: GET_INGREDIENTS_FAILED,
            });
        });
};
