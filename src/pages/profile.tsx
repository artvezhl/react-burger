import React, { ReactElement, useCallback } from 'react';

import profileStyles from './profile.module.css';
import Profile from '../components/profile/profile';
import { Link, useLocation } from 'react-router-dom';
import { logoutRequest } from '../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { CommonStateType } from '../services/reducers/reducers-types';
import { DEPLOY_URL } from '../services/constants';

export const ProfilePage = (): ReactElement | null => {
    const user = useSelector((state: CommonStateType) => state.auth.user);
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const activeRouteHandler = useCallback(
        (path) => {
            return path === pathname ? profileStyles.profile__link_isActive : profileStyles.profile__link;
        },
        [pathname],
    );

    const logout = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(logoutRequest());
        },
        [dispatch],
    );

    return user ? (
        <div className={profileStyles.profile}>
            <ul className={`pl-5 ${profileStyles.profile__list}`}>
                <li className={profileStyles.profile__item}>
                    <Link
                        to={`/${DEPLOY_URL}profile`}
                        className={`text text_type_main-medium ${activeRouteHandler(`/${DEPLOY_URL}profile`)}`}
                    >
                        Профиль
                    </Link>
                </li>
                <li className={profileStyles.profile__item}>
                    <Link
                        to={`/${DEPLOY_URL}profile/orders`}
                        className={`text text_type_main-medium ${activeRouteHandler(`/${DEPLOY_URL}profile/orders`)} ${
                            profileStyles.profile__link
                        }`}
                    >
                        История заказов
                    </Link>
                </li>
                <li className={profileStyles.profile__item}>
                    <Link
                        onClick={logout}
                        to={`/${DEPLOY_URL}`}
                        className={`text text_type_main-medium ${profileStyles.profile__link}`}
                    >
                        Выход
                    </Link>
                </li>
            </ul>
            <Profile />
        </div>
    ) : null;
};
