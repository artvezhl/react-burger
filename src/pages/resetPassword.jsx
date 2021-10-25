import React, {useState} from "react";
import registerStyles from "./register.module.css";
import AuthForm from "../components/auth-form/auth-form";
import formStyles from "../components/auth-form/auth-form.module.css";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useHistory} from "react-router-dom";
import { resetPassword } from "../services/actions/auth";
import {SET_PASSWORD_RESET} from "../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

export function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [passError, setPassError] = useState(false);
    const [codeError, setCodeError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const isPasswordReset = useSelector(state => state.auth.passwordReset)

    const onSubmit = (e) => {
        e.preventDefault();
        if (password && code) {
            try {
                dispatch(resetPassword(password, code));
                dispatch({
                    type: SET_PASSWORD_RESET,
                    passwordIsReset: false
                });
                history.replace({
                    pathname: '/login'
                });
            } catch (e) {
                console.log(e);
            }
        } else {
            passError && codeError
                ? (setPassError(true) && setCodeError(true))
                : passError
                ? setPassError(true)
                : setCodeError(true)
        }
    }

    return ( isPasswordReset ?
        (<div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form} onSubmit={onSubmit}>
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
                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Вспомнили пароль? <Link to="/login" className={formStyles.auth__link}>Войти</Link>
                </p>
            </AuthForm>
        </div>) :
            <Redirect to="/forgot-password" />
    );
}
