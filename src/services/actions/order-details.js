import { REQUEST_URL } from "../constants";

export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';
export const RESET_ORDER_NUMBER = 'RESET_ORDER_NUMBER';

export function getOrderNumber(orderIDs) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_NUMBER,
        })

        fetch(REQUEST_URL + "/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                "ingredients": orderIDs,
            }),
        })
            .then(res => {
                if (res && res.ok) {
                    res.json().then(res => {
                        dispatch({
                            type: GET_ORDER_NUMBER_SUCCESS,
                            number: res.order.number,
                        })
                        return res.order.number;
                    })
                } else {
                    dispatch({
                        type: GET_ORDER_NUMBER_FAILED,
                    })
                }
            })
            .catch(e => {
                dispatch({
                    type: GET_ORDER_NUMBER_FAILED,
                })
            })
    }
}
