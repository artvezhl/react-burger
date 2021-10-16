import React, {useState} from "react";

import loginStyles from './login.module.css';
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

export function LoginPage () {
    const [form, setForm] = useState({
        "email": "",
        "password": "",
    });

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={loginStyles.main}>
            <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Вход</h2>
                    <Input placeholder="E-mail" type="email" name="email" form={form} inputHandler={onChange} />
                    <Input placeholder="Пароль" type="password" name="password" icon="" form={form} inputHandler={onChange} />
                    <Button type="primary" size="medium">
                        Войти
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Вы новый пользователь? <Link to="/register" className={formStyles.auth__link}>Зарегистрироваться</Link>
                </p>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Забыли пароль? <Link to="/forgot-password" className={formStyles.auth__link}>Восстановить пароль</Link>
                </p>
            </AuthForm>
        </div>
    );
}
