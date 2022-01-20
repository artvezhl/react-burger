import { ingredientsReducer } from '../reducers/burger-ingredients';
import { actionCreators } from '../actions/burger-ingredients';
import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from '../constants';

const ingredients = [
    {
        _id: '60d3b41abdacab0026a733c6',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        ingredientCount: 0,
        ingredientOrderCount: 0,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
    },
    {
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
        __v: 0,
    },
];

describe.skip('Burger-ingredients actions and reducer test', () => {
    describe('Burger-ingredients action creators', () => {
        it('creates request action correctly', () => {
            expect(actionCreators.fetchIngredientsRequest()).toEqual({ type: GET_INGREDIENTS });
        });
        it('creates fail action correctly', () => {
            expect(actionCreators.fetchIngredientsFailed()).toEqual({ type: GET_INGREDIENTS_FAILED });
        });
        it('creates success action correctly', () => {
            expect(actionCreators.fetchIngredientsRequestSuccess(ingredients)).toEqual({
                type: GET_INGREDIENTS_SUCCESS,
                ingredients,
            });
        });
    });

    test('Burger ingredients reducer request works correctly', () => {
        const state = ingredientsReducer(
            {
                ingredients: [],
                ingredientsRequest: true,
                ingredientsFailed: false,
                activeTab: 'Булки',
            },
            actionCreators.fetchIngredientsRequest(),
        );
        expect(state).toEqual({
            ingredients: [],
            ingredientsRequest: true,
            ingredientsFailed: false,
            activeTab: 'Булки',
        });
    });

    test('Burger ingredients reducer success works correctly', () => {
        const state = ingredientsReducer(
            {
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false,
                activeTab: 'Булки',
            },
            actionCreators.fetchIngredientsRequestSuccess(ingredients),
        );
        expect(state).toEqual({
            ingredients: ingredients,
            ingredientsRequest: false,
            ingredientsFailed: false,
            activeTab: 'Булки',
        });
    });

    test('Burger ingredients reducer failed works correctly', () => {
        const state = ingredientsReducer(
            {
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false,
                activeTab: 'Булки',
            },
            actionCreators.fetchIngredientsFailed(),
        );
        expect(state).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: true,
            activeTab: 'Булки',
        });
    });
});
