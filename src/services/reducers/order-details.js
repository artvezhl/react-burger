import {
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_FAILED,
    RESET_ORDER_NUMBER
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
                orderNumberRequest: false,
                orderNumberFailed: true,
            }
        }
        case RESET_ORDER_NUMBER: {
            return state;
        }
        default: {
            return state;
        }
    }
}