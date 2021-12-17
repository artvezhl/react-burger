import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    AUTHORIZE_USER,
    AUTHORIZE_USER_SUCCESS,
    AUTHORIZE_USER_FAILED,
    REFRESH_TOKEN,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILED,
    LOGOUT,
    LOGOUT_SUCCESS, LOGOUT_FAILED, SET_USER, SET_PASSWORD_RESET, GET_USER_SUCCESS, GET_USER_FAILED
} from '../actions/auth';

const initialUserState = {
    user: null,
    userDataRequest: true,
    userDataFailed: false,
    passwordReset: false
}

export const authReducer = (state = initialUserState, action) => {
    switch (action.type) {
        // case GET_USER: {
        //     return {
        //         ...state,
        //         userDataRequest: true
        //     }
        // }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                userDataRequest: false,
                userDataFailed: true
            }
        }
        case SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case REGISTER_USER: {
            return {
                ...state,
                userDataRequest: true,
            }
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
            }
        }
        case REGISTER_USER_FAILED: {
            return {
                ...state,
                userDataFailed: true,
            }
        }
        case AUTHORIZE_USER: {
            return {
                ...state,
                userDataRequest: true,
            }
        }
        case AUTHORIZE_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
            }
        }
        case AUTHORIZE_USER_FAILED: {
            return {
                ...state,
                userDataFailed: true,
            }
        }
        case REFRESH_TOKEN: {
            return {
                ...state,
                userDataRequest: true,
            }
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                userDataRequest: false,
                userDataFailed: false,
            }
        }
        case REFRESH_TOKEN_FAILED: {
            return {
                ...state,
                userDataFailed: true,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                userDataRequest: true,
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state,
                userDataFailed: true,
            }
        }
        case SET_PASSWORD_RESET: {
            return {
                ...state,
                passwordReset: action.passwordIsReset
            }
        }
        default: {
            return state;
        }
    }
}
