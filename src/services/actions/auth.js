import { LOGIN_URL, REGISTER_URL, LOGOUT_URL, TOKEN_URL } from "../constants";
import { setCookie, getCookie } from "../../utils";

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const AUTHORIZE_USER_SUCCESS = 'AUTHORIZE_USER_SUCCESS';
export const AUTHORIZE_USER_FAILED = 'AUTHORIZE_USER_FAILED';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

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
            type: REFRESH_TOKEN,
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
                type: AUTHORIZE_USER_FAILED,
            })
        })
    }
};

export const refreshToken = () => {
    return function (dispatch) {
        dispatch({
            type: REFRESH_TOKEN,
        })

        const refreshToken = getCookie('refreshToken');

        fetch(TOKEN_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                "token": refreshToken
            } )
        }).then(res => {
            if (res && res.ok) {
                res.json().then(data => {
                    const token = data.accessToken.split(' ')[1];
                    if (data.refreshToken) {
                        setCookie('refreshToken', data.refreshToken);
                    }
                    dispatch({
                        type: REFRESH_TOKEN_SUCCESS,
                        token: token,
                    })
                })
            } else {
                dispatch({
                    type: REFRESH_TOKEN_FAILED,
                })
            }
        }).catch(() => {
            dispatch({
                type: REFRESH_TOKEN_FAILED,
            })
        })
    }
};

export const logoutRequest = () => {
    return function (dispatch) {
        dispatch({
            type: REGISTER_USER,
        })

        const refreshToken = getCookie('refreshToken');

        fetch(LOGOUT_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                "token": refreshToken
            } )
        }).then(res => {
            if (res && res.ok) {
                res.json().then(data => {
                    if (data.success) {
                        dispatch({
                            type: LOGOUT_SUCCESS,
                            user: null,
                            token: '',
                        })
                    } else {
                        dispatch({
                            type: LOGOUT_FAILED,
                        })
                    }
                })
            }
        }).catch(() => {
            dispatch({
                type: LOGOUT_FAILED,
            })
        })
    }
};
