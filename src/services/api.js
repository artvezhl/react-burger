import {FORGOT_URL, GET_USER_INFO_URL, RESET_URL, SET_USER_INFO_URL, TOKEN_URL} from "./constants";
import {getCookie, setCookie} from "../utils";

const checkResponse = (res) => {
    console.log('res in checkresponse', res);
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    // if (res.ok) {
    //     console.log('res is OK');
    //     return res.json();
    // } else {
    //     console.log('res is not OK');
    //     res.json().then((err) => Promise.reject(err));
    // }
};

export const refreshToken = () => {
    console.log('in refresh token');
    console.log('refreshTKN - ', localStorage.getItem("refreshToken"));
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
        console.log('res after refresh - ', res);
    });
};

export const fetchWithRefresh = async (url, options) => {
    try {
        console.log('in TRY of fetchWithRefresh');
        const res = await fetch(url, options);
        setTimeout(() => console.log('res - ', res), 1000);
        return await checkResponse(res);
    } catch (err) {
        console.log('in CATCH of fetchWithRefresh');
        if (err.message === "jwt expired") {
            console.log('in JWT EXPIRED ERROR');
            const refreshData = await refreshToken(); //обновляем токен
            console.log('HERE');
            console.log('refreshdata is - ', refreshData);
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            setCookie("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            console.log('in JWT EXPIRED REJECT');
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

    // return response.json();
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



