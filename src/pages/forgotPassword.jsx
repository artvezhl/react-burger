import React, { useRef, useState } from "react";

import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

import { forgotPassword } from "../services/api";

export function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const inputRef = useRef(null);
    // const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    const onSubmit = async () => {
        await forgotPassword(email);
        // setTimeout(() => inputRef.current.focus(), 0);

    }

    return (
        <div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Восстановление пароля</h2>
                    <Input
                        type={'email'}
                        placeholder={'Укажите e-mail'}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name={'email'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
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