import { constructorReducer } from '../reducers/constructor-list';
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_TOTAL, SET_INGREDIENT_INDEX, SET_INGREDIENTS_IDS } from '../constants';

const costructorMock = {
    bun: {
        _id: '60d3b41abdacab0026a733c7',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        ingredientCount: 0,
        ingredientOrderCount: 0,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        index: 1,
        __v: 0,
    },
    ingredient: {
        _id: '60d3b41abdacab0026a733cd',
        name: 'Соус фирменный Space Sauce',
        type: 'sauce',
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        ingredientCount: 0,
        ingredientOrderCount: 0,
        image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
        index: 0,
        __v: 0,
    },
    total: 12345,
    ingredientWithoutIndex: {
        _id: '60d3b41abdacab0026a733cd',
        name: 'Соус фирменный Space Sauce',
        type: 'sauce',
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        ingredientCount: 0,
        ingredientOrderCount: 0,
        image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
        __v: 0,
    },
    IDs: ['60d3b41abdacab0026a733cd', '60d3b41abdacab0026a733c7'],
};

describe.skip('Constructor-list reducer test', () => {
    test('Constructor-list reducer add ingredient works incorrectly', () => {
        const state = constructorReducer(
            { bun: {}, ingredients: [], total: 0, ingredientIDs: [] },
            { type: ADD_INGREDIENT, ingredient: costructorMock.ingredient },
        );

        expect(state).toStrictEqual({
            bun: {},
            ingredients: [costructorMock.ingredient],
            total: 0,
            ingredientIDs: [],
        });
    });

    test('Constructor-list reducer add bun works incorrectly', () => {
        const state = constructorReducer(
            { bun: {}, ingredients: [], total: 0, ingredientIDs: [] },
            { type: ADD_INGREDIENT, ingredient: costructorMock.bun },
        );

        expect(state).toStrictEqual({ bun: costructorMock.bun, ingredients: [], total: 0, ingredientIDs: [] });
    });

    test('Constructor-list reducer remove ingredient works incorrectly', () => {
        const state = constructorReducer(
            { bun: {}, ingredients: [costructorMock.ingredient], total: 0, ingredientIDs: [] },
            { type: REMOVE_INGREDIENT, id: costructorMock.ingredient._id, index: costructorMock.ingredient.index },
        );

        expect(state).toStrictEqual({ bun: {}, ingredients: [], total: 0, ingredientIDs: [] });
    });

    test('Constructor-list reducer total works incorrectly', () => {
        const state = constructorReducer(
            { bun: {}, ingredients: [], total: 0, ingredientIDs: [] },
            { type: SET_TOTAL, total: costructorMock.total },
        );

        expect(state).toStrictEqual({ bun: {}, ingredients: [], total: costructorMock.total, ingredientIDs: [] });
    });

    test('Constructor-list reducer set index works incorrectly', () => {
        const state = constructorReducer(
            { bun: {}, ingredients: [costructorMock.ingredientWithoutIndex], total: 0, ingredientIDs: [] },
            { type: SET_INGREDIENT_INDEX },
        );

        expect(state).toStrictEqual({
            bun: {},
            ingredients: [costructorMock.ingredient],
            total: 0,
            ingredientIDs: [],
        });
    });

    test('Constructor-list reducer set ingredients IDs works incorrectly', () => {
        const state = constructorReducer(
            { bun: {}, ingredients: [], total: 0, ingredientIDs: [] },
            { type: SET_INGREDIENTS_IDS, IDs: costructorMock.IDs },
        );

        expect(state).toStrictEqual({
            bun: {},
            ingredients: [],
            total: 0,
            ingredientIDs: costructorMock.IDs,
        });
    });
});
