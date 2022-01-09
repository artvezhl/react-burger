import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    GET_FEED,
    WS_CONNECTION_START,
    WS_SEND_MESSAGE,
} from '../action-types/wsActionTypes';
import { TWsActions } from '../action-types/wsActionTypes';
import { TFeedOrder } from '../../components/feed/feed';

type TWSState = {
    wsConnected: boolean;
    orders: Array<TFeedOrder>;
    total: number;
    totalToday: number;
    error?: Event;
};

const initialState: TWSState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
};

export const wsReducer = (state = initialState, action: TWsActions) => {
    switch (action.type) {
        case GET_FEED:
            console.log('action payload', action.payload);
            return {
                ...state,
                orders: [...action.payload.orders],
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true,
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false,
            };
        case WS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                orders: [...state.orders, action.payload],
            };
        default:
            return state;
    }
};
