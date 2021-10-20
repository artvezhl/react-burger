import {LOGIN_URL, REGISTER_URL, LOGOUT_URL, TOKEN_URL, GET_USER_INFO_URL} from "../constants";
import { setCookie, getCookie } from "../../utils";

export const SET_USER = 'SET_USER';
export const GET_USER_INFO = 'GET_USER_INFO';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const AUTHORIZE_USER_SUCCESS = 'AUTHORIZE_USER_SUCCESS';
export const AUTHORIZE_USER_FAILED = 'AUTHORIZE_USER_FAILED';
export const TOKEN_EXPIRED = 'TOKEN_EXPIRED';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

// export const getUserInfo = (token) => {
//     return function (dispatch) {
//         dispatch({
//             type: GET_USER_INFO,
//         })
//
//         fetch(GET_USER_INFO_URL, {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer ' + token,
//                 'Content-Type': 'application/json',
//             }
//         }).then(res => {
//             // console.log(res);
//             if (res && res.ok) {
//                 return res.json();
//             } else {
//                 // console.log(res);
//                 res.json().then(data => {
//                     return data.message;
//                 })
//             }
            // if (res) {
            //     res.json().then(result => {
            //         if (result.success) {
            //             console.log('result is OK - ', result);
            //             dispatch({
            //                 type: SET_USER,
            //                 user: result.user,
            //             })
            //         }
            //         if (result.message === 'jwt expired') {
            //             dispatch({
            //                 type: TOKEN_EXPIRED,
            //                 isTokenExpired: true
            //             })
            //         } else {
            //             console.log(result.message);
            //         }
                    // const token = data.accessToken.split(' ')[1];
                    // if (data.refreshToken && token) {
                    //     setCookie('accessToken', token);
                    //     setCookie('refreshToken', data.refreshToken);
                    // }
                    // dispatch({
                    //     type: REGISTER_USER_SUCCESS,
                    //     user: data.user,
                    //     // token: token,
                    // })
            //     })
            // }
            // else {
            //     console.log('res is not OK', res);
            //     // dispatch({
            //     //     type: REGISTER_USER_FAILED,
            //     // })
            // }
    //     }).catch((e) => {
    //         console.log('e - ', e);
    //         // dispatch({
    //         //     type: REGISTER_USER_FAILED,
    //         // })
    //     })
    // }

    // response.json().then(data => {
    //     if (data.success) {
    //         return data;
    //     } else {
    //         console.log(data.message);
    //     }
    // }).catch(e => console.log(e));
// }

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
                    if (data.refreshToken && token) {
                        setCookie('accessToken', token);
                        localStorage.setItem("refreshToken", data.refreshToken);
                    }
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        user: data.user,
                        // token: token,
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
                    if (token && data.refreshToken) {
                        setCookie('accessToken', token);
                        localStorage.setItem("refreshToken", data.refreshToken);
                    }
                    dispatch({
                        type: AUTHORIZE_USER_SUCCESS,
                        user: data.user,
                        // token: token,
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
                    if (token && data.refreshToken) {
                        setCookie('accessToken', token);
                        localStorage.setItem("refreshToken", data.refreshToken);
                    }
                    dispatch({
                        type: REFRESH_TOKEN_SUCCESS,
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

        const refreshToken = localStorage.getItem('refreshToken');

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
                        setCookie('accessToken', '');
                        localStorage.removeItem("refreshToken", '');
                        dispatch({
                            type: LOGOUT_SUCCESS,
                            user: null,
                            // token: '',
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
