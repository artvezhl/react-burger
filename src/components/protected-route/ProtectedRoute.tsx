import React, { FC } from 'react';

import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { CommonStateType } from '../../services/reducers/reducers-types';
import { DEPLOY_URL } from '../../services/constants';

type TProtectedRouteProps = { path: string; exact: boolean };

const ProtectedRoute: FC<TProtectedRouteProps> = ({ children, path, ...rest }) => {
    const user = useSelector((state: CommonStateType) => state.auth.user);
    const location = useLocation();

    const profilePages: string = `/${DEPLOY_URL}profile` || `/${DEPLOY_URL}profile/orders`;

    if (
        user &&
        (path === `/${DEPLOY_URL}login` ||
            path === `/${DEPLOY_URL}register` ||
            path === `/${DEPLOY_URL}forgot-password` ||
            path === `/${DEPLOY_URL}reset-password`)
    ) {
        return (
            <Redirect
                to={{
                    pathname: `/${DEPLOY_URL}`,
                    state: location,
                }}
            />
        );
    }

    return (
        <Route
            {...rest}
            render={() =>
                !user && path === profilePages ? <Redirect to={{ pathname: '/react-burger/login' }} /> : children
            }
        />
    );
};

export default ProtectedRoute;
