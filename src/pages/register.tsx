import React, { useState, useCallback, ReactElement } from 'react';

import registerStyles from './register.module.css';
import AuthForm from '../components/auth-form/auth-form';
import { formHandler as onChange } from '../utils';
import formStyles from '../components/auth-form/auth-form.module.css';
import { registerRequest } from '../services/actions/auth';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CommonStateType } from '../services/reducers/reducers-types';
import { DEPLOY_URL } from '../services/constants';

export type TForm = {
    email: string;
    name: string;
    password: string;
};

export const RegisterPage = (): ReactElement => {
    const user = useSelector((state: CommonStateType) => state.auth.user);
    const [form, setForm] = useState<TForm>({
        email: '',
        password: '',
        name: '',
    });
    const dispatch = useDispatch();

    const register = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(registerRequest(form));
        },
        [dispatch, form],
    );

    return (
        <div className={registerStyles.main}>
            {!user ? (
                <AuthForm>
                    <form className={formStyles.form} onSubmit={register}>
                        <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Регистрация</h2>
                        <Input
                            type={'text'}
                            placeholder={'Имя'}
                            value={form.name}
                            onChange={(e) => onChange(e, setForm, form)}
                            name={'name'}
                            size={'default'}
                        />
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
                            icon={'ShowIcon'}
                            size={'default'}
                        />
                        <Button type="primary" size="medium">
                            Зарегистрироваться
                        </Button>
                    </form>
                    <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>
                        Уже зарегистрированы?{' '}
                        <Link to={`/${DEPLOY_URL}login`} className={formStyles.auth__link}>
                            Войти
                        </Link>
                    </p>
                </AuthForm>
            ) : (
                <Redirect to={`/${DEPLOY_URL}`} />
            )}
        </div>
    );
};
