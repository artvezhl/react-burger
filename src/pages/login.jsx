import React, {useCallback, useRef, useState} from "react";

import loginStyles from './login.module.css';
import AuthForm from "../components/auth-form/auth-form";
import { formHandler as onChange } from "../utils";
import formStyles from "../components/auth-form/auth-form.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import {loginRequest} from "../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

export function LoginPage () {
    const user = useSelector(state => state.auth.user);
    const [passwordInputIcon, setIcon] = useState('ShowIcon');
    const [form, setForm] = useState({
        "email": "",
        "password": "",
    });
    const passwordRef = useRef(null);

    const dispatch = useDispatch();

    const onIconClick = useCallback(() => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text';
            setIcon('HideIcon');
        } else {
            passwordRef.current.type = 'password';
            setIcon('ShowIcon')
        }
    }, [passwordRef]);

    const login = useCallback(
        e => {
            e.preventDefault();
            dispatch(loginRequest(form));
        },
        [dispatch, form]
    );

    return (
        <div className={loginStyles.main}>
            { !user
            ? <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Вход</h2>
                    <Input
                        type={"email"}
                        placeholder={"E-mail"}
                        value={form.email}
                        onChange={(e) => onChange(e, setForm, form)}
                        name={'email'}
                        // error={codeError}
                        // errorText={'Поле не может быть пустым'}
                        size={'default'}
                    />
                    {/*TODO сделать чтобы пароль можно было скрывать и открывать при нажатии на иконку с глазом*/}
                    <Input
                        type={"password"}
                        placeholder={"Пароль"}
                        value={form.password}
                        onChange={(e) => onChange(e, setForm, form)}
                        name={'password'}
                        icon={passwordInputIcon}
                        ref={passwordRef}
                        onIconClick={() => onIconClick(passwordRef)}
                        // error={codeError}
                        // errorText={'Поле не может быть пустым'}
                        size={'default'}
                    />
                    <Button type="primary" size="medium" onClick={login}>
                        Войти
                    </Button>
                </form>
                <p
                    className={`${formStyles.auth__text} text text_type_main-default mt-4`}
                >
                    Вы новый пользователь?
                    <Link
                        to="/register"
                        className={formStyles.auth__link}
                    >
                        Зарегистрироваться
                    </Link>
                </p>
                <p
                    className={`${formStyles.auth__text} text text_type_main-default mt-4`}
                >
                    Забыли пароль?
                    <Link
                        to="/forgot-password"
                        className={formStyles.auth__link}
                    >
                        Восстановить пароль
                    </Link>
                </p>
            </AuthForm>
                : <Redirect to='/' />
            }
        </div>
    );
}
