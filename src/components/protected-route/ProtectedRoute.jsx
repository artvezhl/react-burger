import React, {useEffect, useState} from "react";

import {Redirect, Route, useLocation} from "react-router-dom";
import {getCookie} from "../../utils";
import {SET_USER} from "../../services/actions/auth";
import { getUserInfo } from "../../services/api";
import {useDispatch, useSelector} from "react-redux";
import {pathToFileURL} from "url";

export function ProtectedRoute({ children, ...rest }) {
    const user = useSelector(state => state.auth.user);
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(pathname);
        console.log('user = ', user);
        const token = getCookie('accessToken');
        if (token) {
            getUserInfo(token)
                .then(data => {
                    if (data.success) {
                        dispatch({
                            type: SET_USER,
                            user: data.user
                        });
                    }
                })
                .catch(err => console.log('err - ', err.message))
        }

    }, [dispatch]);

    // TODO защитить от авторизированных пользователей маршруты

    if ((pathname === "/login" || "/register" || "/forgot-password" || "/reset-password") && user) {
        return (
            <Redirect to={{
                pathname: '/'
            }} />
        );
    }

    if ((pathname === "/profile") && !user) {
        console.log('user in prfl - ', !!user);
        return (
            <Redirect to={{
                pathname: '/login'
            }} />
        );
    }

    // TODO настроить роут чтобы попадало в профиль при авторизации

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
