import React, {useRef} from "react";

import profileStyles from './profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

export function ProfilePage() {
    const nameRef = useRef(null);
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className={profileStyles.profile}>
            <ul className={`pl-5 ${profileStyles.profile__list}`}>
                <li className={profileStyles.profile__item}>
                    <Link to="/profile" className={`text text_type_main-medium ${profileStyles.profile__link}`}>Профиль</Link>
                </li>
                <li className={profileStyles.profile__item}>
                    <Link to="/profile/orders" className={`text text_type_main-medium ${profileStyles.profile__link}`}>История заказов</Link>
                </li>
                <li className={profileStyles.profile__item}>
                    <a href="/" className={`text text_type_main-medium ${profileStyles.profile__link}`}>Выход</a>
                </li>
            </ul>
            <div className={profileStyles.profile__inputs}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    // onChange={e => setEmail(e.target.value)}
                    // value={name}
                    name={'email'}
                    error={false}
                    ref={nameRef}
                    errorText={'Ошибка'}
                />
                <Input
                    type={'email'}
                    placeholder={'Логин'}
                    // onChange={e => setEmail(e.target.value)}
                    // value={name}
                    name={'login'}
                    error={false}
                    ref={loginRef}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    type={'password'}
                    placeholder={'Пароль'}
                    // onChange={e => setEmail(e.target.value)}
                    // value={name}
                    name={'password'}
                    error={false}
                    ref={passwordRef}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
        </div>
    );
}