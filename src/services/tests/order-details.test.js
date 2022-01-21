import { orderDetailsReducer } from '../reducers/order-details';
import { GET_ORDER_NUMBER, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED, RESET_ORDER_NUMBER } from '../constants';

const orderDetailsMock = {
    initialState: {
        number: undefined,
        orderNumberRequest: false,
        orderNumberFailed: false,
    },
    number: 43562,
};

describe('Order details reducer test', () => {
    test('Order details reducer get order number works incorrectly', () => {
        const state = orderDetailsReducer(
            {
                number: undefined,
                orderNumberRequest: false,
                orderNumberFailed: false,
            },
            { type: GET_ORDER_NUMBER },
        );

        expect(state).toEqual({ number: undefined, orderNumberRequest: true, orderNumberFailed: false });
    });
    test('Order details reducer get order number success works incorrectly', () => {
        const state = orderDetailsReducer(
            {
                number: undefined,
                orderNumberRequest: true,
                orderNumberFailed: false,
            },
            { type: GET_ORDER_NUMBER_SUCCESS, number: orderDetailsMock.number },
        );

        expect(state).toEqual({ number: orderDetailsMock.number, orderNumberRequest: false, orderNumberFailed: false });
    });
    test('Order details reducer get order number failed works incorrectly', () => {
        const state = orderDetailsReducer(
            {
                number: undefined,
                orderNumberRequest: true,
                orderNumberFailed: false,
            },
            { type: GET_ORDER_NUMBER_FAILED },
        );

        expect(state).toEqual({ number: undefined, orderNumberRequest: false, orderNumberFailed: true });
    });
    test('Order details reducer reset order number works incorrectly', () => {
        const state = orderDetailsReducer(
            {
                number: orderDetailsMock.number,
                orderNumberRequest: false,
                orderNumberFailed: false,
            },
            { type: RESET_ORDER_NUMBER },
        );

        expect(state).toEqual(orderDetailsMock.initialState);
    });
});
