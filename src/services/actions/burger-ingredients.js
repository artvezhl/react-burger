import { REQUEST_URL, GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from '../constants';

export function getIngredients() {
    return function (dispatch) {
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
}
