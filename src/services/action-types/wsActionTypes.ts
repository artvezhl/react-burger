import { TFeedOrder } from '../../components/feed/feed';
import { AppDispatch, AppThunk } from '../thunk-types';
import { REQUEST_URL } from '../constants';

export const WS_CONNECTION_START = 'WS_CONNECTION_START' as const;
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS' as const;
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR' as const;
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED' as const;
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE' as const;
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE' as const;
export const GET_FEED = 'GET_FEED' as const;

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload: Event;
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload: CloseEvent;
}

export interface IWsGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: MessageEvent;
}

export interface IWsSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
    readonly payload: string;
}

export interface IGetFeed {
    readonly type: typeof GET_FEED;
    readonly payload: {
        orders: Array<TFeedOrder>;
        total: number;
        totalToday: number;
    };
}

export type TWsActions =
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetMessage
    | IWsSendMessage
    | IGetFeed;

export const getFeedOrders: AppThunk = () => (dispatch: AppDispatch) => {
    fetch(REQUEST_URL + '/orders/all')
        .then((res) => {
            if (res && res.ok) {
                res.json().then((res) => {
                    dispatch({
                        type: GET_FEED,
                        payload: res,
                    });
                });
            } else {
                console.log('Request error');
            }
        })
        .catch(() => {
            console.log('Request error');
        });
};
