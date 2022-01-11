import { REQUEST_URL } from './constants';
import { setCookie } from '../utils';

type optionsFetchWithRequest = {
    method: string;
    headers: {
        Authorization?: string;
        'Content-Type': string;
    };
    body?: string;
};

export const checkResponse = (res: Response): Promise<any> => {
    return res.ok ? res.json() : res.json().then((err: string) => Promise.reject(err));
};

export const refreshToken = (): Promise<any> => {
    return fetch(`${REQUEST_URL}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken'),
        }),
    }).then(checkResponse);
};

export const fetchWithRefresh = async (url: string, options: optionsFetchWithRequest): Promise<any> => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err: any) {
        if (err.message === 'jwt expired') {
            const refreshData = await refreshToken(); //обновляем токен
            localStorage.setItem('refreshToken', refreshData.refreshToken);
            setCookie('accessToken', refreshData.accessToken);
            options.headers.Authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};
