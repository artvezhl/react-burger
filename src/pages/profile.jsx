import React, {useCallback, useEffect, useRef, useState} from "react";

import profileStyles from './profile.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { getCookie } from "../utils";
import { updateUserInfo } from "../services/api";
import { formHandler as onChange } from "../utils";
import {Link, useLocation} from "react-router-dom";
import {logoutRequest, SET_USER} from "../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

const onFocusInput = (inputRef) => inputRef.current.classList.add(`${profileStyles.profile__input_isActive}`);

const onBlurInput = (inputRef) => inputRef.current.classList.remove(`${profileStyles.profile__input_isActive}`);

const onIconClick = (inputRef) => inputRef.current.focus();

export function ProfilePage() {
    const [form, setForm] = useState({
        name: '',
        login: '',
        password: ''
    });
    const user = useSelector(state => state.auth.user);
    const nameRef = useRef(null);
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
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

    const resetChanges = useCallback((e) => {
        e.preventDefault();
        setForm({
            ...form,
            name: user.name,
            login: user.email,
            password: ''
        })
    }, [user, form]);

    const updateInfo = useCallback(
        () => {
            const token = getCookie('accessToken');
            updateUserInfo(form, token)
                .then((data) => {
                    const { name, email } = data.user;
                    setForm({
                        ...form,
                        name: name,
                        login: email,
                        password: ''
                    })
                    dispatch({
                        type: SET_USER,
                        user: data.user
                    })
                }).catch(err => console.log(err));
    }, [dispatch, form]);

    useEffect(() => {
        console.log('user in profile', user);
    //     const token = getCookie('accessToken');
    //     if (token) {
            // getUserInfo(token).then((data) => {
            //     const { name, email } = data.user;
                setForm({
                    ...form,
                    name: user.name,
                    login: user.email
                })
            //     dispatch({
            //         type: SET_USER,
            //         user: data.user
            //     });
            // }).catch(err => console.log(err))
    //     }
    }, [dispatch])

    return (
        (user)
          ?  (<div className={profileStyles.profile}>
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
            <div className={profileStyles.profile__inputs}>
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    value={form.name}
                    icon={'EditIcon'}
                    onChange={e => onChange(e, setForm, form)}
                    ref={nameRef}
                    name={'name'}
                    onFocus={() => onFocusInput(nameRef)}
                    onBlur={() => onBlurInput(nameRef)}
                    onIconClick={() => onIconClick(nameRef)}
                    size={'default'}
                />
                <Input
                    type={"text"}
                    placeholder={"Логин"}
                    value={form.login}
                    icon={'EditIcon'}
                    onChange={e => onChange(e, setForm, form)}
                    name={'login'}
                    ref={loginRef}
                    onFocus={() => onFocusInput(loginRef)}
                    onBlur={() => onBlurInput(loginRef)}
                    onIconClick={() => onIconClick(loginRef)}
                    size={'default'}
                />
                <Input
                    type={'password'}
                    placeholder={"Пароль"}
                    value={form.password}
                    icon={'EditIcon'}
                    onChange={e => onChange(e, setForm, form)}
                    name={'password'}
                    ref={passwordRef}
                    onFocus={() => onFocusInput(passwordRef)}
                    onBlur={() => onBlurInput(passwordRef)}
                    onIconClick={() => onIconClick(passwordRef)}
                    size={'default'}
                />
                <div className={profileStyles.profile__info_change}>
                    <span
                        className={`text text_type_main-default ${profileStyles.profile__info_cancel}`}
                        onClick={resetChanges}
                    >
                        Отмена
                    </span>
                    <Button
                        type="primary"
                        size="medium"
                        onClick={updateInfo}
                    >
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>)
            : null

    );
}
