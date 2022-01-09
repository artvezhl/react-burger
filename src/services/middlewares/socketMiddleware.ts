import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../thunk-types';
import { IWsConnectionStart, TWsActions } from '../action-types/wsActionTypes';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_GET_MESSAGE,
    WS_CONNECTION_CLOSED,
    WS_SEND_MESSAGE,
} from '../action-types/wsActionTypes';

export const socketMiddleware = (): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return (next) => (action: TWsActions) => {
            const { dispatch } = store;
            const { type } = action;

            if (type === WS_CONNECTION_START) {
                const { payload } = action as IWsConnectionStart;
                socket = new WebSocket(payload.url);
            }

            if (socket?.readyState === 1 && type === WS_CONNECTION_CLOSED) {
                socket?.close();
            }

            if (socket) {
                socket.onopen = () => {
                    console.log('onOpennn');
                    dispatch({ type: WS_CONNECTION_SUCCESS });
                };

                socket.onerror = (event) => {
                    dispatch({ type: WS_CONNECTION_ERROR, payload: event });
                };

                socket.onmessage = (event) => {
                    console.log('ws MESSAGe');
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restData } = parsedData;
                    dispatch({ type: WS_GET_MESSAGE, payload: restData });
                };

                socket.onclose = (event) => {
                    dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
                    if (event.wasClean) {
                        console.log(`Соединение закрыто - код ${event.code}`);
                    } else {
                        console.log(`Соединение закрыто некорректно. Код закрытия - ${event.code}`);
                    }
                };
            }

            next(action);
        };
    };
};
