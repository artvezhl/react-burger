import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ingredientStyles from './ingredient.module.css';
import { useSelector } from 'react-redux';
import { CommonStateType } from '../services/reducers/reducers-types';
import { TIngredient } from '../components/burger-ingredients/ingredient/ingredient-types';
import { TIngredientDetailsParams } from '../components/ingredient-details/ingredient-details-types';

export const Ingredient = () => {
    const currentIngredients = useSelector((state: CommonStateType) => state.ingredients.ingredients);
    const [currentIngredient, setCurrentIngredient] = useState<TIngredient>();
    const { id } = useParams<TIngredientDetailsParams>();

    useEffect(() => {
        setCurrentIngredient(currentIngredients.filter((item: TIngredient) => item._id === id)[0]);
    }, [currentIngredients, id]);

    return (
        currentIngredients && (
            <div className={`${ingredientStyles.content} pt-10 pb-15 pl-10 pr-10`}>
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
                <img
                    src={currentIngredient && currentIngredient.image_large}
                    alt={currentIngredient && currentIngredient.name}
                />
                <p className="text text_type_main-medium mt-4 mb-8 ml-25 mr-25">
                    {currentIngredient && currentIngredient.name}
                </p>
                <table>
                    <tbody>
                        <tr className="text text_type_main-default text_color_inactive">
                            <th className={ingredientStyles.content__row}>Калории,ккал</th>
                            <th className={ingredientStyles.content__row}>Белки, г</th>
                            <th className={ingredientStyles.content__row}>Жиры, г</th>
                            <th className={ingredientStyles.content__row}>Углеводы, г</th>
                        </tr>
                        <tr
                            className={`${ingredientStyles.ingredient__details} text text_type_digits-default text_color_inactive`}
                        >
                            <td className={ingredientStyles.content__row}>
                                {currentIngredient && currentIngredient.calories}
                            </td>
                            <td className={ingredientStyles.content__row}>
                                {currentIngredient && currentIngredient.proteins}
                            </td>
                            <td className={ingredientStyles.content__row}>
                                {currentIngredient && currentIngredient.fat}
                            </td>
                            <td className={ingredientStyles.content__row}>
                                {currentIngredient && currentIngredient.carbohydrates}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    );
};
