import React, { ReactElement, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styles from './profile-edit.module.css';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { formHandler as onChange, getCookie } from '../../../utils';
import { updateUserInfo } from '../../../services/actions/auth';
import { SET_USER } from '../../../services/constants';
import { useDispatch, useSelector } from 'react-redux';
import { CommonStateType } from '../../../services/reducers/reducers-types';

const onFocusInput = (inputRef: RefObject<HTMLInputElement>) =>
    inputRef.current ? inputRef.current.classList.add(`${styles.input_isActive}`) : null;
const onBlurInput = (inputRef: RefObject<HTMLInputElement>) =>
    inputRef.current ? inputRef.current.classList.remove(`${styles.input_isActive}`) : null;
const onIconClick = (inputRef: RefObject<HTMLInputElement>) => (inputRef.current ? inputRef.current.focus() : null);

type TForm = {
    name: string;
    login: string;
    password: string;
};

const ProfileEdit = (): ReactElement => {
    const [form, setForm] = useState<TForm>({
        name: '',
        login: '',
        password: '',
    });
    const user = useSelector((state: CommonStateType) => state.auth.user);
    const nameRef = useRef<HTMLInputElement>(null);
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const resetChanges = useCallback(
        (e) => {
            e.preventDefault();
            if (user) {
                setForm({
                    ...form,
                    name: user.name,
                    login: user.email,
                    password: '',
                });
            }
        },
        [user, form],
    );

    const updateInfo = useCallback(
        (e) => {
            e.preventDefault();
            const token = getCookie('accessToken');
            try {
                dispatch(updateUserInfo(form, token));
                dispatch({
                    type: SET_USER,
                    user: {
                        name: form.name,
                        login: form.login,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        },
        [dispatch, form],
    );

    useEffect(() => {
        if (user) {
            setForm({
                ...form,
                name: user.name,
                login: user.email,
            });
        }
    }, []);

    return (
        <form className={styles.inputs} onSubmit={updateInfo}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                value={form.name}
                icon={'EditIcon'}
                onChange={(e) => onChange(e, setForm, form)}
                ref={nameRef}
                name={'name'}
                onFocus={() => onFocusInput(nameRef)}
                onBlur={() => onBlurInput(nameRef)}
                onIconClick={() => onIconClick(nameRef)}
                size={'default'}
            />
            <Input
                type={'text'}
                placeholder={'Логин'}
                value={form.login}
                icon={'EditIcon'}
                onChange={(e) => onChange(e, setForm, form)}
                name={'login'}
                ref={loginRef}
                onFocus={() => onFocusInput(loginRef)}
                onBlur={() => onBlurInput(loginRef)}
                onIconClick={() => onIconClick(loginRef)}
                size={'default'}
            />
            <Input
                type={'password'}
                placeholder={'Пароль'}
                value={form.password}
                icon={'EditIcon'}
                onChange={(e) => onChange(e, setForm, form)}
                name={'password'}
                ref={passwordRef}
                onFocus={() => onFocusInput(passwordRef)}
                onBlur={() => onBlurInput(passwordRef)}
                onIconClick={() => onIconClick(passwordRef)}
                size={'default'}
            />
            <div className={styles.info_change}>
                <span className={`text text_type_main-default ${styles.info_cancel}`} onClick={resetChanges}>
                    Отмена
                </span>
                <Button type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </form>
    );
};

export default ProfileEdit;
