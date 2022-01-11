import React, { ReactElement, useCallback, useState } from 'react';

import registerStyles from './register.module.css';
import AuthForm from '../components/auth-form/auth-form';
import formStyles from '../components/auth-form/auth-form.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';

import { forgotPassword } from '../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { CommonStateType } from '../services/reducers/reducers-types';
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const ForgotPasswordPage = (): ReactElement => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const isPasswordReset = useSelector((state: CommonStateType) => state.auth.passwordReset);
    const dispatch = useDispatch();

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (email.match(emailPattern)) {
                try {
                    dispatch(forgotPassword(email));
                } catch (e) {
                    console.log(e);
                }
            } else {
                setError(true);
            }
        },
        [dispatch, email],
    );

    return !isPasswordReset ? (
        <div className={registerStyles.main}>
            <AuthForm>
                <form className={formStyles.form} onSubmit={onSubmit}>
                    <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Восстановление пароля</h2>
                    <Input
                        type={'email'}
                        placeholder={'Укажите e-mail'}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError(false);
                        }}
                        value={email}
                        name={'email'}
                        error={error}
                        errorText={'Неверный формат email'}
                        size={'default'}
                    />
                    <Button type="primary" size="medium">
                        Восстановить
                    </Button>
                </form>
                <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>
                    Вспомнили пароль?{' '}
                    <Link to="/login" className={formStyles.auth__link}>
                        Войти
                    </Link>
                </p>
            </AuthForm>
        </div>
    ) : (
        <Redirect to={'/reset-password'} />
    );
};
