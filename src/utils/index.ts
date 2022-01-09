import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { format } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import { ru } from 'date-fns/locale';

type TForm = {
    email?: string;
    password?: string;
    name?: string;
    code?: string;
};

type TFormHandler = (e: ChangeEvent<HTMLInputElement>, setForm: Dispatch<SetStateAction<any>>, form: TForm) => void;

export const formHandler: TFormHandler = (e, setForm, form) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

export function setCookie(name: string, value: string, props: { path?: string; expires?: Date | string } = {}) {
    props = {
        path: '/', //задаем корневой адрес для cookies
        ...props,
    };
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (typeof exp != 'string') {
        if (exp && exp.toUTCString) {
            props.expires = exp.toUTCString();
        }
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}

export function getCookie(name: string): string | undefined {
    const matches = document.cookie.match(
        // eslint-disable-next-line
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const dataFunc = (date: string): string => {
    let result = '';
    const currentDate = new Date(date);
    isToday(currentDate)
        ? (result += 'Сегодня, ')
        : isYesterday(currentDate)
        ? (result += 'Вчера, ')
        : (result += `${formatDistanceToNow(currentDate, { locale: ru })} назад, `);
    return (result += `
    ${format(new Date(currentDate), 'H:mm', { locale: ru })}
    i-${format(new Date(currentDate), 'z', { locale: ru })} 
  `);
};
