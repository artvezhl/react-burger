import React from "react";

import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import FormInput from "../components/auth-form/input/input";

import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export function RegisterPage () {
    return (
        <div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Регистрация</h2>
                    <FormInput placeholder="Имя" />
                    <FormInput placeholder="E-mail" type="email" />
                    <FormInput placeholder="Пароль" type="password" icon="" />
                    <Button type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Уже зарегистрированы? <Link to="/login" className={formStyles.auth__link}>Войти</Link>
                </p>
            </AuthForm>
        </div>
    );
}