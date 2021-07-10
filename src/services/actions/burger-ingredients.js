import {URL} from "../../constants";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS,
        })

        fetch(URL)
            .then((res) => {
                if (res && res.ok) {
                    res.json().then(res => {
                        dispatch({
                            type: GET_INGREDIENTS_SUCCESS,
                            ingredients: res.data,
                        })
                    })
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED,
                    })
                }
        })
            .catch(e => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                })
        })
    }
}