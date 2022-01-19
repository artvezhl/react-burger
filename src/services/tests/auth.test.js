import {
    AUTHORIZE_USER_FAILED,
    AUTHORIZE_USER_SUCCESS,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    LOGOUT_FAILED,
    LOGOUT_SUCCESS,
    REFRESH_TOKEN,
    REFRESH_TOKEN_FAILED,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    SET_PASSWORD_RESET,
} from '../constants';
import { actionCreators } from '../actions/auth';
import { authReducer } from '../reducers/auth';

const user = {
    name: 'Artem',
    email: 'artem@yandex.ru',
};

describe.skip('Auth actions', () => {
    describe('Auth action creators', () => {
        it('creates user request action correctly', () => {
            expect(actionCreators.getUser(user)).toEqual({ type: GET_USER_SUCCESS, user });
        });
        it('creates user request failed action correctly', () => {
            expect(actionCreators.getUserFailed()).toEqual({ type: GET_USER_FAILED });
        });
        it('creates refresh token action correctly', () => {
            expect(actionCreators.refreshToken()).toEqual({ type: REFRESH_TOKEN });
        });
        it('creates refresh token failed action correctly', () => {
            expect(actionCreators.refreshTokenFailed()).toEqual({ type: REFRESH_TOKEN_FAILED });
        });
        it('creates refresh token failed action correctly', () => {
            expect(actionCreators.refreshTokenFailed()).toEqual({ type: REFRESH_TOKEN_FAILED });
        });
        it('creates set password reset action correctly', () => {
            expect(actionCreators.setPasswordReset()).toEqual({ type: SET_PASSWORD_RESET, passwordIsReset: true });
        });
        it('creates set new user action correctly', () => {
            expect(actionCreators.setNewUser(user)).toEqual({ type: REGISTER_USER_SUCCESS, user });
        });
        it('creates set new user failed action correctly', () => {
            expect(actionCreators.setNewUserFailed()).toEqual({ type: REGISTER_USER_FAILED });
        });
        it('creates authorize user action correctly', () => {
            expect(actionCreators.authorizeUser(user)).toEqual({ type: AUTHORIZE_USER_SUCCESS, user });
        });
        it('creates authorize user failed action correctly', () => {
            expect(actionCreators.authorizeUserFailed()).toEqual({ type: AUTHORIZE_USER_FAILED });
        });
        it('creates user logout action correctly', () => {
            expect(actionCreators.setUserLogout()).toEqual({ type: LOGOUT_SUCCESS, user: null });
        });
        it('creates user logout failed action correctly', () => {
            expect(actionCreators.logoutFailed()).toEqual({ type: LOGOUT_FAILED });
        });
    });

    test('Auth reducer user request works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: true, userDataFailed: false, passwordReset: false },
            actionCreators.getUser(user),
        );
        expect(state).toStrictEqual({
            user: user,
            userDataRequest: false,
            userDataFailed: false,
            passwordReset: false,
        });
    });

    test('Auth reducer user request failed works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: true, userDataFailed: false, passwordReset: false },
            actionCreators.getUserFailed(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: false,
            userDataFailed: true,
            passwordReset: false,
        });
    });

    test('Auth reducer refresh token works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: true, userDataFailed: false, passwordReset: false },
            actionCreators.refreshToken(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: true,
            userDataFailed: false,
            passwordReset: false,
        });
    });

    test('Auth reducer refresh token failed works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: true, userDataFailed: false, passwordReset: false },
            actionCreators.refreshTokenFailed(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: true,
            userDataFailed: true,
            passwordReset: false,
        });
    });

    test('Auth reducer set password reset works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.setPasswordReset(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: false,
            userDataFailed: false,
            passwordReset: true,
        });
    });

    test('Auth reducer add new user works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.setNewUser(user),
        );
        expect(state).toStrictEqual({
            user: user,
            userDataRequest: false,
            userDataFailed: false,
            passwordReset: false,
        });
    });

    test('Auth reducer add new user failed works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.setNewUserFailed(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: false,
            userDataFailed: true,
            passwordReset: false,
        });
    });

    test('Auth reducer authorize user works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.authorizeUser(user),
        );
        expect(state).toStrictEqual({
            user: user,
            userDataRequest: false,
            userDataFailed: false,
            passwordReset: false,
        });
    });

    test('Auth reducer authorize user failed works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.authorizeUserFailed(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: false,
            userDataFailed: true,
            passwordReset: false,
        });
    });

    test('Auth reducer user logout works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.setUserLogout(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: false,
            userDataFailed: false,
            passwordReset: false,
        });
    });

    test('Auth reducer user logout failed works incorrectly', () => {
        const state = authReducer(
            { user: null, userDataRequest: false, userDataFailed: false, passwordReset: false },
            actionCreators.setUserLogout(),
        );
        expect(state).toStrictEqual({
            user: null,
            userDataRequest: false,
            userDataFailed: false,
            passwordReset: false,
        });
    });
});
