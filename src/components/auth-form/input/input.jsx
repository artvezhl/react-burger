import React, { useState, useRef, useEffect } from "react";
// import {extend} from "immutability-helper";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function FormInput({
    type = 'text',
    placeholder,
    name = '',
    error = false,
    errorText = 'Ошибка',
                                  }) {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState(type);
    const inputRef = useRef(null);
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
        setInputType(inputType === 'password' ? 'text' : 'password');
    }

    const setIcon = placeholder !== 'Пароль' ? '' : inputType === 'password' ? 'ShowIcon' : 'HideIcon';

    // useEffect(() => {
    //     setIcon = ;
    // }, []);

    return (
        <Input
            type={inputType}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
            icon={setIcon}
            value={value}
            name={name}
            error={error}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={errorText}
        />
    )
}