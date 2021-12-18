import React, { FC } from 'react';

import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CommonStateType } from '../../services/reducers/reducers-types';

type TProtectedRouteProps = { path: string; exact: boolean };

const ProtectedRoute: FC<TProtectedRouteProps> = ({ children, path, ...rest }) => {
    const user = useSelector((state: CommonStateType) => state.auth.user);
    const location = useLocation();
    // const { pathname } = useLocation();

    if (!user && path === '/profile') {
        return (
            <Redirect
                to={{
                    pathname: '/login',
                }}
            />
        );
    }

    if (
        user &&
        (path === '/login' || path === '/register' || path === '/forgot-password' || path === '/reset-password')
    ) {
        return (
            <Redirect
                to={{
                    pathname: '/',
                    state: location,
                }}
            />
        );
    }

    return (
        <Route
            {...rest}
            render={() => (!user && path === '/profile' ? <Redirect to={{ pathname: '/login' }} /> : children)}
        />
    );
};

export default ProtectedRoute;
