import { ingredientDetailsReducer } from '../reducers/ingredient-details';
import { SET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from '../constants';

const ingredientDetailsMock = {
    initialState: {
        image_large: '',
        name: '',
        calories: '',
        proteins: '',
        fat: '',
        carbohydrates: '',
    },
    details: {
        image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
        name: 'Соус фирменный Space Sauce',
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
    },
};

describe.skip('Ingredient details reducer test', () => {
    test('Ingredient details reducer set details works incorrectly', () => {
        const state = ingredientDetailsReducer(
            {
                image_large: '',
                name: '',
                calories: '',
                proteins: '',
                fat: '',
                carbohydrates: '',
            },
            { type: SET_INGREDIENT_DETAILS, details: ingredientDetailsMock.details },
        );

        expect(state).toEqual(ingredientDetailsMock.details);
    });

    test('Ingredient details reducer remove details works incorrectly', () => {
        const state = ingredientDetailsReducer(ingredientDetailsMock.details, { type: REMOVE_INGREDIENT_DETAILS });

        expect(state).toEqual(ingredientDetailsMock.initialState);
    });
});
