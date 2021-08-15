import React, { useState, useCallback } from "react";
import { useAuth } from "../services/auth";

import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import FormInput from "../components/auth-form/input/input";
import { registerRequest } from "../services/actions/auth";

import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";

export function RegisterPage () {
    const [form, setForm] = useState({
        "email": "",
        "password": "",
        "name": ""
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
        [dispatch, registerRequest, form]
    );

    return (
        <div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Регистрация</h2>
                    <FormInput placeholder="Имя" name="name" form={form} inputHandler={onChange} />
                    <FormInput placeholder="E-mail" type="email" name="email" form={form} inputHandler={onChange} />
                    <FormInput placeholder="Пароль" type="password" name="password" icon="" form={form} inputHandler={onChange} />
                    <Button type="primary" size="medium" onClick={register} >
                        Зарегистрироваться
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Уже зарегистрированы? <Link to="/login" className={formStyles.auth__link}>Войти</Link>
                </p>
            </AuthForm>
        </div>
    );
}