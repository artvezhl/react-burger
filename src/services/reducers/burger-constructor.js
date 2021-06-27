import { ADD_INGREDIENT } from "../actions/burger-constructor";

const initialState = {
    ingredients: [
        {
            "_id": "60d3b41abdacab0026a733c6",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        },
        {
            "_id": "60d3b41abdacab0026a733c8",
            "name": "Филе Люминесцентного тетраодонтимформа",
            "type": "main",
            "proteins": 44,
            "fat": 26,
            "carbohydrates": 85,
            "calories": 643,
            "price": 988,
            "image": "https://code.s3.yandex.net/react/code/meat-03.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
            "__v": 0
        },
        {
            "_id": "60d3b41abdacab0026a733c9",
            "name": "Мясо бессмертных моллюсков Protostomia",
            "type": "main",
            "proteins": 433,
            "fat": 244,
            "carbohydrates": 33,
            "calories": 420,
            "price": 1337,
            "image": "https://code.s3.yandex.net/react/code/meat-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
            "__v": 0
        },
        {
            "_id": "60d3b41abdacab0026a733cc",
            "name": "Соус Spicy-X",
            "type": "sauce",
            "proteins": 30,
            "fat": 20,
            "carbohydrates": 40,
            "calories": 30,
            "price": 90,
            "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            "__v": 0
        }
    ],
    bunName: 'Краторная булка N-200i',
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                items: state.items.push(action.ingredient),
            }
        }
        default: {
            return state;
        }

    }
}
