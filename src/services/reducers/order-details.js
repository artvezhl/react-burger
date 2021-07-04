import {
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_FAILED
} from '../actions/order-details';

const initialState = {
    number: undefined,
    orderNumberRequest: false,
    orderNumberFailed: false,
}

export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_NUMBER: {
            return {
                ...state,
                orderNumberRequest: true,
            };
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                orderNumberRequest: false,
                ingredientsFailed: false,
                number: action.number,
            }
        }
        case GET_ORDER_NUMBER_FAILED: {
            return {
                ...state,
                orderNumberFailed: true,
            }
        }
        default: {
            return state;
        }
    }
}