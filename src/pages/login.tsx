import React, { ReactElement, useCallback, useRef, useState } from 'react';

import loginStyles from './login.module.css';
import AuthForm from '../components/auth-form/auth-form';
import { formHandler as onChange } from '../utils';
import formStyles from '../components/auth-form/auth-form.module.css';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { loginRequest } from '../services/actions/auth';
import { useDispatch } from 'react-redux';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

export type TForm = {
    email: string;
    password: string;
};

export const LoginPage = (): ReactElement => {
    const [passwordInputIcon, setIcon] = useState<keyof TICons>('ShowIcon');
    const [form, setForm] = useState<TForm>({
        email: '',
        password: '',
    });
    const passwordRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const onIconClick = useCallback(() => {
        if (passwordRef.current) {
            if (passwordRef.current.type === 'password') {
                passwordRef.current.type = 'text';
                setIcon('HideIcon');
            } else {
                passwordRef.current.type = 'password';
                setIcon('ShowIcon');
            }
        }
    }, [passwordRef]);

    const login = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(loginRequest(form));
        },
        [dispatch, form],
    );

    return (
        <div className={loginStyles.main}>
            <AuthForm>
                <form className={formStyles.form} onSubmit={login}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Вход</h2>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        value={form.email}
                        onChange={(e) => onChange(e, setForm, form)}
                        name={'email'}
                        size={'default'}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        value={form.password}
                        onChange={(e) => onChange(e, setForm, form)}
                        name={'password'}
                        icon={passwordInputIcon}
                        ref={passwordRef}
                        onIconClick={onIconClick}
                        size={'default'}
                    />
                    <Button type="primary" size="medium">
                        Войти
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>
                    Вы новый пользователь?
                    <Link to="/register" className={formStyles.auth__link}>
                        Зарегистрироваться
                    </Link>
                </p>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>
                    Забыли пароль?
                    <Link to="/forgot-password" className={formStyles.auth__link}>
                        Восстановить пароль
                    </Link>
                </p>
            </AuthForm>
        </div>
    );
};
