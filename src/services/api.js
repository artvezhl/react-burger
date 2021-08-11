const forgotURL = 'https://norma.nomoreparties.space/api/password-reset';
const resetURL = 'https://norma.nomoreparties.space/api/password-reset/reset';

export const forgotPassword = async (email) => {
    console.log(email);
    const result = await fetch(forgotURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: {
            email: email,
        }
    });

    if (result.ok) {
        // TODO
        // В случае успеха пользователь направляется на маршрут /reset-password,
        // а на введённый имейл приходит инструкция с кодом для восстановления пароля.
        // Пока вы не знаете, как реализовывать переадресацию, поэтому к перенаправлению
        // пользователя мы рекомендуем вернуться на следующем этапе проектной работы.
        return await result.json();
    } else {
        console.log(result.status)
    }

    // const data = await result.json();

    console.log('result', result);
}

export const resetPassword = async (password, code) => {
    console.log(password, code);
    const result = await fetch(resetURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: {
            "password": password,
            "token": code
        }
    });

    if (result.ok) {
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

        return await result.json();
    } else {
        console.log(result.status)
    }

    // const data = await result.json();

    console.log('result', result);
}