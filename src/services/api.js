import {FORGOT_URL, GET_USER_INFO_URL, RESET_URL, SET_USER_INFO_URL} from "./constants";

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

    // const data = await result.json();

    // console.log('result', result);
}

export const getUserInfo = async (token) => {
    const response = await fetch(GET_USER_INFO_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    })

    if (response && response.ok) {
        return response.json();
    } else {
        console.log(response.message);
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

