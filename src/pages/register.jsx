import React, { useState, useCallback } from "react";

import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import { registerRequest } from "../services/actions/auth";

import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export function RegisterPage () {
    const user = useSelector(state => state.auth.user);
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    });

    const dispatch = useDispatch();

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const register = useCallback(
        e => {
            e.preventDefault();
            dispatch(registerRequest(form));
        },
        [dispatch, form]
    );

    return (
        <div className={registerStyles.main}>
            { !user
                ? <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Регистрация</h2>
                    <Input
                        type={"text"}
                        placeholder={"Имя"}
                        value={form.name}
                        onChange={onChange}
                        name={'name'}
                        // error={codeError}
                        // errorText={'Поле не может быть пустым'}
                        size={'default'}
                    />
                    <Input
                        type={"email"}
                        placeholder={"E-mail"}
                        value={form.email}
                        onChange={onChange}
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
                        onChange={onChange}
                        name={'password'}
                        icon={'ShowIcon'}
                        // error={codeError}
                        // errorText={'Поле не может быть пустым'}
                        size={'default'}
                    />
                    <Button
                        type="primary"
                        size="medium"
                        onClick={register}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Уже зарегистрированы? <Link to="/login" className={formStyles.auth__link}>Войти</Link>
                </p>
            </AuthForm>
                : <Redirect to='/' />
            }
        </div>
    );
}
