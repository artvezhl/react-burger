import React from "react";

import formStyles from './auth-form.module.css';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import FormInput from "./input/input";

export default function AuthForm () {
    // const [value, setValue] = React.useState('')
    // const inputRef = React.useRef(null)
    // const onIconClick = () => {
    //     setTimeout(() => inputRef.current.focus(), 0)
    //     alert('Icon Click Callback')
    // }

    return (
        <div className={formStyles.auth}>
            <form className={formStyles.form}>
                <h2 className={`text text_type_main-medium mb-6 ${formStyles.title}`}>Вход</h2>
                <FormInput placeholder="E-mail" type="email" />
                <FormInput placeholder="Пароль" type="password" icon="" />
                {/*<Input*/}
                {/*    type={'text'}*/}
                {/*    placeholder={'placeholder'}*/}
                {/*    size={'default'}*/}
                {/*    onChange={e => setValue(e.target.value)}*/}
                {/*    icon={'CurrencyIcon'}*/}
                {/*    value={value}*/}
                {/*    ref={inputRef}*/}
                {/*/>*/}
                {/*<input type="text" placeholder="E-mail" className={`mb-6 pl-6 text text_type_main-default text_color_inactive ${formStyles.input}`} />*/}
                {/*<input type="text" placeholder="Пароль" className={`mb-6 pl-6 text text_type_main-default text_color_inactive ${formStyles.input}`} />*/}
                <Button type="primary" size="medium">
                    Войти
                </Button>
            </form>
            <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Вы новый пользователь? <a href="/" className={formStyles.auth__link}>Зарегистрироваться</a>
            </p>
            <p className={`${formStyles.auth__text} text text_type_main-default mt-4`}>Забыли пароль? <a href="/" className={formStyles.auth__link}>Восстановить пароль</a>
            </p>
        </div>
    );
}