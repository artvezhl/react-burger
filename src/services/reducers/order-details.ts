import { GET_ORDER_NUMBER, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED, RESET_ORDER_NUMBER } from '../constants';
import { TOrderDetailsActions } from '../actions/order-details';

type TOrderDetailsInitialState = {
    number: number | undefined;
    orderNumberRequest: boolean;
    orderNumberFailed: boolean;
};

const initialState = {
    number: undefined,
    orderNumberRequest: false,
    orderNumberFailed: false,
};

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions): TOrderDetailsInitialState => {
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
                orderNumberFailed: false,
                number: action.number,
            };
        }
        case GET_ORDER_NUMBER_FAILED: {
            return {
                ...state,
                orderNumberRequest: false,
                orderNumberFailed: true,
            };
        }
        case RESET_ORDER_NUMBER: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
