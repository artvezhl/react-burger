import { FORGOT_URL, RESET_URL } from "./constants";

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
