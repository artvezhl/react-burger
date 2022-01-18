import {
    REQUEST_URL,
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_FAILED,
    RESET_ORDER_NUMBER,
} from '../constants';
import { AppThunk, AppDispatch } from '../thunk-types';
import { getCookie } from '../../utils';

const setOrderNumber = (number: number) => {
    return {
        type: GET_ORDER_NUMBER_SUCCESS,
        number,
    };
};

export interface IGetOrderNumber {
    readonly type: typeof GET_ORDER_NUMBER;
}

export interface IGetOrderNumberSuccess {
    readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
    readonly number: number;
}

export interface IGetOrderNumberFailed {
    readonly type: typeof GET_ORDER_NUMBER_FAILED;
}

export interface IResetOrderNumber {
    readonly type: typeof RESET_ORDER_NUMBER;
}

export type TOrderDetailsActions = IGetOrderNumber | IGetOrderNumberSuccess | IGetOrderNumberFailed | IResetOrderNumber;

export const getOrderNumber: AppThunk = (orderIDs: Array<string>) => (dispatch: AppDispatch) => {
    dispatch({
        type: GET_ORDER_NUMBER,
    });
    const token = getCookie('accessToken');

    fetch(REQUEST_URL + '/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            ingredients: orderIDs,
        }),
    })
        .then((res) => {
            if (res && res.ok) {
                res.json().then((res) => {
                    dispatch(setOrderNumber(res.order.number));
                    // return res.order.number;
                });
            } else {
                dispatch({
                    type: GET_ORDER_NUMBER_FAILED,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: GET_ORDER_NUMBER_FAILED,
            });
        });
};
