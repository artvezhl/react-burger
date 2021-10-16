import React, {useCallback, useMemo, useState} from "react";

import profileStyles from './profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from "react-router-dom";
import {loginRequest, logoutRequest} from "../services/actions/auth";
import {useDispatch} from "react-redux";

export function ProfilePage() {
    const [name, setName] = useState('Artem');
    const [login, setLogin] = useState('vezhl@yandex.ru');
    const [password, setPassword] = useState('832y53025235');
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const activeRouteHandler = useCallback((path) => {
        return path === pathname ? profileStyles.profile__link_isActive : profileStyles.profile__link
    }, [pathname]);

    const logout = useCallback(
        e => {
            e.preventDefault();
            dispatch(logoutRequest());
        },
        [dispatch]
    );

    return (
        <div className={profileStyles.profile}>
            <ul className={`pl-5 ${profileStyles.profile__list}`}>
                <li className={profileStyles.profile__item }>
                    <Link to="/profile" className={`text text_type_main-medium ${activeRouteHandler("/profile")}`}>Профиль</Link>
                </li>
                <li className={profileStyles.profile__item}>
                    <Link to="/profile/orders" className={`text text_type_main-medium ${profileStyles.profile__link}`}>История заказов</Link>
                </li>
                <li className={profileStyles.profile__item}>
                    <Link onClick={logout} to="/" className={`text text_type_main-medium ${profileStyles.profile__link}`}>Выход</Link>
                </li>
            </ul>
            {/*TODO сделать текст темным если не меняется*/}
            <div className={profileStyles.profile__inputs}>
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    value={name}
                    icon={'EditIcon'}
                    onChange={e => {
                        setName(e.target.value);
                        // setCodeError(false);
                    }}
                    name={'name'}
                    // error={codeError}
                    // errorText={'Поле не может быть пустым'}
                    size={'default'}
                />
                <Input
                    type={"text"}
                    placeholder={"Логин"}
                    value={login}
                    icon={'EditIcon'}
                    onChange={e => {
                        setLogin(e.target.value);
                        // setCodeError(false);
                    }}
                    name={'login'}
                    // error={codeError}
                    // errorText={'Поле не может быть пустым'}
                    size={'default'}
                />
                <Input
                    type={'password'}
                    placeholder={"Пароль"}
                    value={password}
                    icon={'EditIcon'}
                    onChange={e => {
                        setPassword(e.target.value);
                        // setCodeError(false);
                    }}
                    name={'password'}
                    // error={codeError}
                    // errorText={'Поле не может быть пустым'}
                    size={'default'}
                />
            </div>
        </div>
    );
}
