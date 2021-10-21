import {FORGOT_URL, GET_USER_INFO_URL, RESET_URL, SET_USER_INFO_URL, TOKEN_URL} from "./constants";
import {getCookie, setCookie} from "../utils";

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
    return fetch(TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        // .then(checkResponse);
        .then((res) => {
        checkResponse(res);
    });
};

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); //обновляем токен
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            setCookie("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const getUserInfo = async (token) => {
    return await fetchWithRefresh(GET_USER_INFO_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    });
}

export const forgotPassword = async (email) => {
    console.log(email);
    const result = await fetch(FORGOT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email: email,
        })
    });

    if (result.ok) {
        return await result.json();
    } else {
        console.log(result.status)
    }
}

export const resetPassword = async (password, code) => {
    console.log(password, code);
    const result = await fetch(RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "password": password,
            "token": code
        })
    });

    if (result.ok) {
        console.log('result is OK', result);
        // TODO
        // Для реализации этой функциональности потребуется создать пользователя.
        // Вы можете сделать это, отправив POST запрос к эндпоинту
        // https://norma.nomoreparties.space/api/auth/register.
        // Пример тела запроса:
        // {
        //     "email": "test-data@yandex.ru",
        //     "password": "password",
        //     "name": "Username"
        // }

        // return await result.json();
    } else {
        console.log('result is not OK', result)
        console.log(result.status)
    }
}

export const updateUserInfo = async (form, token) => {
    const response = await fetch(SET_USER_INFO_URL, {
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    })

    if (response && response.ok) {
        return response.json();
    } else {
        console.log(response.message);
    }
}

// TODO



