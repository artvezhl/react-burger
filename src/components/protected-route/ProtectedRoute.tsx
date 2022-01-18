import React, { FC } from 'react';

import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { CommonStateType } from '../../services/reducers/reducers-types';

type TProtectedRouteProps = { path: string; exact: boolean };

const ProtectedRoute: FC<TProtectedRouteProps> = ({ children, path, ...rest }) => {
    const user = useSelector((state: CommonStateType) => state.auth.user);
    const location = useLocation();

    // if (!user && path === '/profile/orders') {
    //     return (
    //         <Redirect
    //             to={{
    //                 pathname: '/login',
    //             }}
    //         />
    //     );
    // }

    const profilePages: string = '/profile' || '/profile/orders';

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
            render={() => (!user && path === profilePages ? <Redirect to={{ pathname: '/login' }} /> : children)}
        />
    );
};

export default ProtectedRoute;
