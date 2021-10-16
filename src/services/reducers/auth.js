import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED } from '../actions/auth';

const initialUserState = {
    user: null,
    accessToken: '',
    userDataRequest: false,
    userDataFailed: false,
}

export const authReducer = (state = initialUserState, action) => {
    switch (action.type) {
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
                accessToken: action.token,
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
        default: {
            return state;
        }
    }
}
