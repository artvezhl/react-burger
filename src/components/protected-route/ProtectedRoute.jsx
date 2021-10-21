import React, {useEffect, useState} from "react";

import {Redirect, Route, useLocation} from "react-router-dom";
import {getCookie} from "../../utils";
import {SET_USER} from "../../services/actions/auth";
import { getUserInfo } from "../../services/api";
import {useDispatch, useSelector} from "react-redux";

export function ProtectedRoute({ children, ...rest }) {
    const user = useSelector(state => state.auth.user);
    const location = useLocation();
    const { pathname } = useLocation();

    console.log('user', !!user);
    console.log('pathname', pathname);

    if (!user && pathname !== '/') {
        console.log('!user && pathname !== / || /login');
        return (
            <Redirect to={{
                pathname: '/login',
            }} />
        );
    }

    if (user && (pathname === ("/login" || "/register" || "/forgot-password" || "/reset-password"))) {
        console.log('user && (pathname === "/login" || "/register" || "/forgot-password" || "/reset-password")');
        return (
            <Redirect to={{
                pathname: '/',
                state: location
            }} />
        );
    }

    if (pathname === "/profile") {
        console.log('pathname === "/profile" && !user');
        return ( user
                ? <Redirect to={{
                    pathname: '/login',
                }} />
                : <Redirect to={{
                    pathname: '/',
                }} />
        );
    }

    // TODO настроить роут чтобы попадало в профиль при авторизации
    //  Подумайте, как защитить маршрут /reset-password от пользователей,
    //  которые не заходили на маршрут /forgot-password ранее и не вводили эмейл адрес для восстановления пароля.

    return (
        <Route
            { ...rest }
            render={() => (children)}
            // render={() => (user && (pathname === "/login" || "/register" || "/forgot-password" || "/reset-password"))
            //     ? <Redirect to="/"/>
            //     : (!user && pathname !== "/login" || "/")
            //         ? (<Redirect to="/login" />)
            //         : (pathname === "/login")
            //         ? (children)
            //         : null
            // }
        />
    );
}
