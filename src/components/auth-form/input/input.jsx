// import React, {useState, useRef} from "react";
// // import {extend} from "immutability-helper";
// import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
//
// export default function FormInput({
//     type = 'text',
//     placeholder,
//     name = '',
//     error = false,
//     errorText = 'Ошибка',
//     form,
//     inputHandler,
//                                   }) {
//     const [inputType, setInputType] = useState(type);
//     const inputRef = useRef(null);
//     const onIconClick = () => {
//         setTimeout(() => inputRef.current.focus(), 0);
//         setInputType(inputType === 'password' ? 'text' : 'password');
//     }
//
//     const setIcon = placeholder !== 'Пароль' ? '' : inputType === 'password' ? 'ShowIcon' : 'HideIcon';
//
//     return (
//         <Input
//             type={inputType}
//             placeholder={placeholder}
//             onChange={e => inputHandler(e)}
//             icon={setIcon}
//             value={form[name]}
//             name={name}
//             error={error}
//             ref={inputRef}
//             onIconClick={onIconClick}
//             errorText={errorText}
//         />
//     )
// }
