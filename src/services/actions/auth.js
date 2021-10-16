import { LOGIN_URL, REGISTER_URL, LOGOUT_URL, TOKEN_URL } from "../constants";
import { setCookie, getCookie } from "../../utils";

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const AUTHORIZE_USER_SUCCESS = 'AUTHORIZE_USER_SUCCESS';
export const AUTHORIZE_USER_FAILED = 'AUTHORIZE_USER_FAILED';

export const registerRequest = form => {
    return function (dispatch) {
        dispatch({
            type: REGISTER_USER,
        })

        fetch(REGISTER_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(form)
        }).then(res => {
            if (res && res.ok) {
                res.json().then(data => {
                    const token = data.accessToken.split(' ')[1];
                    if (data.refreshToken) {
                        setCookie('refreshToken', data.refreshToken);
                    }
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        user: data.user,
                        token: token,
                    })
                })
            } else {
                dispatch({
                    type: REGISTER_USER_FAILED,
                })
            }
        }).catch(() => {
            dispatch({
                type: REGISTER_USER_FAILED,
            })
        })
    }
};

export const loginRequest = form => {
    return function (dispatch) {
        dispatch({
            type: AUTHORIZE_USER,
        })

        fetch(LOGIN_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(form)
        }).then(res => {
            if (res && res.ok) {
                res.json().then(data => {
                    const token = data.accessToken.split(' ')[1];
                    if (data.refreshToken) {
                        setCookie('refreshToken', data.refreshToken);
                    }
                    console.log('HERE');
                    dispatch({
                        type: AUTHORIZE_USER_SUCCESS,
                        user: data.user,
                        token: token,
                    })
                })
            } else {
                dispatch({
                    type: AUTHORIZE_USER_FAILED,
                })
            }
        }).catch(() => {
            dispatch({
                type: REGISTER_USER_FAILED,
            })
        })
    }
};
