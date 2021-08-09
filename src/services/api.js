const forgotUrl = 'https://norma.nomoreparties.space/api/password-reset';

export const forgotPassword = async (email) => {
    console.log(email);
    const result = await fetch(forgotUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: {
            email: email,
        }
    });

    const data = await result.json();

    console.log(data);
}