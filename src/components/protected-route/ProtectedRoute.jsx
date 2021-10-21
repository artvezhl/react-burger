import React from "react";

import {Redirect, Route, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

export function ProtectedRoute({ children, ...rest }) {
    const user = useSelector(state => state.auth.user);
    const location = useLocation();
    const { pathname } = useLocation();

    if (!user && pathname === '/profile') {
        return (
            <Redirect to={{
                pathname: '/login',
            }} />
        );
    }

    if (user && (pathname === ("/login" || "/register" || "/forgot-password" || "/reset-password"))) {
        return (
            <Redirect to={{
                pathname: '/',
                state: location
            }} />
        );
    }

    if (pathname === "/profile") {
        return ( !user
                ? <Redirect to={{
                    pathname: '/login',
                }} />
                : children
        );
    }

    return (
        <Route
            { ...rest }
            render={() => (children)}
        />
    );
}
