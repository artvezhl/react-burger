import { AUTHORIZE_USER, LOGOUT, REQUEST_URL, SET_USER } from '../constants';
import { setCookie, getCookie } from '../../utils';
import { fetchWithRefresh, checkResponse } from '../api';
import { AppThunk, AppDispatch } from '../thunk-types';
import {
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    AUTHORIZE_USER_SUCCESS,
    AUTHORIZE_USER_FAILED,
    REFRESH_TOKEN,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    SET_PASSWORD_RESET,
} from '../constants';

export interface IGetUserSuccess {
    readonly type: typeof GET_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface IGetUserFailed {
    readonly type: typeof GET_USER_FAILED;
}

export interface ISetUser {
    readonly type: typeof SET_USER;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface IRegisterUser {
    readonly type: typeof REGISTER_USER;
}

export interface IRegisterUserSuccess {
    readonly type: typeof REGISTER_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface IRegisterUserFailed {
    readonly type: typeof REGISTER_USER_FAILED;
}

export interface IAuthorizeUser {
    readonly type: typeof AUTHORIZE_USER;
}

export interface IAuthorizeUserSuccess {
    readonly type: typeof AUTHORIZE_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface IAuthorizeUserFailed {
    readonly type: typeof AUTHORIZE_USER_FAILED;
}

export interface IRefreshToken {
    readonly type: typeof REFRESH_TOKEN;
}

export interface IRefreshTokenSuccess {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailed {
    readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface ILogout {
    readonly type: typeof LOGOUT;
}

export interface ILogoutSuccess {
    readonly type: typeof LOGOUT_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface ILogoutFailed {
    readonly type: typeof LOGOUT_FAILED;
}

export interface ISetPasswordReset {
    readonly type: typeof SET_PASSWORD_RESET;
    passwordIsReset: boolean;
}

export type TAuthUserActions =
    | IGetUserSuccess
    | IGetUserFailed
    | ISetUser
    | IRegisterUser
    | IRegisterUserSuccess
    | IRegisterUserFailed
    | IAuthorizeUser
    | IAuthorizeUserSuccess
    | IAuthorizeUserFailed
    | IRefreshToken
    | IRefreshTokenSuccess
    | IRefreshTokenFailed
    | ILogout
    | ILogoutSuccess
    | ILogoutFailed
    | ISetPasswordReset;

export const getUserInfo: AppThunk = (token: string) => (dispatch: AppDispatch) => {
    fetchWithRefresh(`${REQUEST_URL}/auth/user`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    })
        .then((data) => {
            if (data.success) {
                dispatch({
                    type: GET_USER_SUCCESS,
                    user: data.user,
                });
            } else {
                throw Error('Error user request');
            }
        })
        .catch(() => {
            dispatch({
                type: GET_USER_FAILED,
            });
        });
};

export const updateUserInfo: AppThunk = (form, token) => (dispatch: AppDispatch) => {
    fetchWithRefresh(`${REQUEST_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    })
        .then((data) => {
            if (data.success) {
                dispatch({
                    type: GET_USER_SUCCESS,
                    user: data.user,
                });
            } else {
                throw Error('Error user request');
            }
        })
        .catch(() => {
            dispatch({
                type: GET_USER_FAILED,
            });
        });
};

export const forgotPassword: AppThunk = (email) => (dispatch: AppDispatch) => {
    return fetchWithRefresh(`${REQUEST_URL}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            email: email,
        }),
    })
        .then((res) => {
            console.log('HERE and ', res);
            if (res.success && res.message === 'Reset email sent') {
                dispatch({
                    type: SET_PASSWORD_RESET,
                    passwordIsReset: true,
                });
            }
        })
        .catch((e) => console.log(e));
};

export const resetPassword: AppThunk = (password, code) => () => {
    fetchWithRefresh(`${REQUEST_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            password: password,
            token: code,
        }),
    })
        .then(checkResponse)
        .catch((err) => console.log(err));
};

export const registerRequest: AppThunk = (form) => (dispatch: AppDispatch) => {
    dispatch({
        type: REGISTER_USER,
    });

    fetch(`${REQUEST_URL}/auth/register`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(form),
    })
        .then((res) => {
            if (res && res.ok) {
                res.json().then((data) => {
                    const token = data.accessToken.split(' ')[1];
                    if (data.refreshToken && token) {
                        setCookie('accessToken', token);
                        localStorage.setItem('refreshToken', data.refreshToken);
                    }
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        user: data.user,
                    });
                });
            } else {
                dispatch({
                    type: REGISTER_USER_FAILED,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: REGISTER_USER_FAILED,
            });
        });
};

export const loginRequest: AppThunk = (form) => (dispatch: AppDispatch) => {
    dispatch({
        type: REFRESH_TOKEN,
    });

    fetch(`${REQUEST_URL}/auth/login`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(form),
    })
        .then((res) => {
            if (res && res.ok) {
                res.json().then((data) => {
                    const token = data.accessToken.split(' ')[1];
                    if (token && data.refreshToken) {
                        setCookie('accessToken', token);
                        localStorage.setItem('refreshToken', data.refreshToken);
                    }
                    dispatch({
                        type: AUTHORIZE_USER_SUCCESS,
                        user: data.user,
                        // token: token,
                    });
                });
            } else {
                dispatch({
                    type: AUTHORIZE_USER_FAILED,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: AUTHORIZE_USER_FAILED,
            });
        });
};

export const refreshToken: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: REFRESH_TOKEN,
    });

    const refreshToken = getCookie('refreshToken');

    fetch(`${REQUEST_URL}/auth/token`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            token: refreshToken,
        }),
    })
        .then((res) => {
            if (res && res.ok) {
                res.json().then((data) => {
                    const token = data.accessToken.split(' ')[1];
                    if (token && data.refreshToken) {
                        setCookie('accessToken', token);
                        localStorage.setItem('refreshToken', data.refreshToken);
                    }
                    dispatch({
                        type: REFRESH_TOKEN_SUCCESS,
                    });
                });
            } else {
                dispatch({
                    type: REFRESH_TOKEN_FAILED,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: REFRESH_TOKEN_FAILED,
            });
        });
};

export const logoutRequest: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: REGISTER_USER,
    });

    const refreshToken = localStorage.getItem('refreshToken');

    fetch(`${REQUEST_URL}/auth/logout`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            token: refreshToken,
        }),
    })
        .then((res) => {
            if (res && res.ok) {
                res.json().then((data) => {
                    if (data.success) {
                        setCookie('accessToken', '');
                        localStorage.removeItem('refreshToken');
                        dispatch({
                            type: LOGOUT_SUCCESS,
                            user: null,
                            // token: '',
                        });
                    } else {
                        dispatch({
                            type: LOGOUT_FAILED,
                        });
                    }
                });
            }
        })
        .catch(() => {
            dispatch({
                type: LOGOUT_FAILED,
            });
        });
};
