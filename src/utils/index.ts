import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { format } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import { ru } from 'date-fns/locale';
import { TIngredient } from '../components/burger-ingredients/ingredient/ingredient-types';

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

export const setCookie = (
    name: string,
    value: string,
    props: { path?: string; expires?: Date | string } = {},
): void => {
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
};

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

export const orderSumFunc = (IDs: Array<string>, ingredients: Array<TIngredient>): number => {
    let result = 0;
    IDs.forEach((id: string) => {
        const currentIgd = ingredients.find((ingredient: TIngredient) => ingredient._id === id);
        if (currentIgd && currentIgd.type === 'bun') result += currentIgd.price * 2;
        if (currentIgd) result += currentIgd.price;
    });
    return result;
};
