import React, {useState} from "react";
import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {resetPassword} from "../services/api";

export function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [passError, setPassError] = useState(false);
    const [codeError, setCodeError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (password && code) {
            resetPassword(password, code)
                .then((result) => console.log(result))
                .catch(result => console.log(result.success));
        } else {
            passError && codeError
                ? (setPassError(true) && setCodeError(true))
                : passError
                ? setPassError(true)
                : setCodeError(true);
        }
    }

    return (
        <div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Восстановление пароля</h2>
                    <Input
                        type="password"
                        placeholder="Введите новый пароль"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            setPassError(false);
                        }}
                        name={'password'}
                        error={passError}
                        errorText={'Поле не может быть пустым'}
                        size={'default'}
                    />
                    <Input
                        type={undefined}
                        placeholder="Введите код из письма"
                        value={code}
                        onChange={e => {
                            setCode(e.target.value);
                            setCodeError(false);
                        }}
                        name={'code'}
                        error={codeError}
                        errorText={'Поле не может быть пустым'}
                        size={'default'}
                    />
                    <Button type="primary" size="medium" onClick={onSubmit}>
                        Сохранить
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Вспомнили пароль? <Link to="/login" className={formStyles.auth__link}>Войти</Link>
                </p>
            </AuthForm>
        </div>
    );
}
