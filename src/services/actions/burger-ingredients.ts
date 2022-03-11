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

export const actionCreators = {
    fetchIngredientsRequest: () => ({ type: GET_INGREDIENTS }),
    fetchIngredientsRequestSuccess: (ingredients: Array<TIngredient>) => ({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients,
    }),
    fetchIngredientsFailed: () => ({ type: GET_INGREDIENTS_FAILED }),
};

export const fetchIngredientsRequest = () => {
    return {
        type: GET_INGREDIENTS,
    };
};

export const setIngredients = (ingredients: Array<TIngredient>) => {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: GET_INGREDIENTS_FAILED,
    };
};

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
    actionCreators.fetchIngredientsRequest();

    fetch(REQUEST_URL + '/ingredients')
        .then((res) => {
            if (res && res.ok) {
                res.json().then((res) => {
                    dispatch(actionCreators.fetchIngredientsRequestSuccess(res.data));
                });
            } else {
                actionCreators.fetchIngredientsFailed();
            }
        })
        .catch(() => {
            actionCreators.fetchIngredientsFailed();
        });
};
