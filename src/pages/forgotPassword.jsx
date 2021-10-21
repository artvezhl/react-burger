import React, {useState} from "react";

import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";

import { forgotPassword } from "../services/api";
import {SET_PASSWORD_RESET} from "../services/actions/auth";
import {useDispatch} from "react-redux";
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        if (email.match(emailPattern)) {
            forgotPassword(email)
                .then(() => {
                    dispatch({
                        type: SET_PASSWORD_RESET,
                        passwordIsReset: true
                    })
                    history.replace({
                        pathname: '/reset-password'
                    })
                })
                .catch(err => console.log(err));

        } else {
            setError(true);
        }
    }

    return (
        <div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Восстановление пароля</h2>
                    <Input
                        type={'email'}
                        placeholder={'Укажите e-mail'}
                        onChange={e => {
                            setEmail(e.target.value);
                            if (error) setError(false);
                        }}
                        value={email}
                        name={'email'}
                        error={error}
                        errorText={'Неверный формат email'}
                        size={'default'}
                    />
                    <Button type="primary" size="medium" onClick={onSubmit}>
                        Восстановить
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Вспомнили пароль? <Link to="/login" className={formStyles.auth__link}>Войти</Link>
                </p>
            </AuthForm>
        </div>
    );
}
