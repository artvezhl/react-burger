import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../thunk-types';
import { TWsActions } from '../action-types/wsActionTypes';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_GET_MESSAGE,
    WS_CONNECTION_CLOSED,
    WS_SEND_MESSAGE,
} from '../action-types/wsActionTypes';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return (next) => (action: TWsActions) => {
            const { dispatch, getState } = store;
            const { type, payload } = action;

            if (type === WS_CONNECTION_START) {
                // объект класса WebSocket
                socket = new WebSocket(wsUrl);
                console.log('socket.readyState', socket.readyState);
            }
            if (socket) {
                console.log('socket', socket);
                // функция, которая вызывается при открытии сокета
                socket.onopen = (event) => {
                    dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
                    console.log('socket opened');
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = (event) => {
                    dispatch({ type: WS_CONNECTION_ERROR, payload: event });
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = (event) => {
                    const { data } = event;
                    dispatch({ type: WS_GET_MESSAGE, payload: data });
                    console.log('data - ', data);
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = (event) => {
                    dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
                };

                if (type === WS_SEND_MESSAGE) {
                    const message = payload;
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    }) as Middleware;
};