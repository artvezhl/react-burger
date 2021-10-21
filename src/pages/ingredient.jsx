import React, { useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import ingredientStyles from "./ingredient.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../services/actions/burger-ingredients";

export const Ingredient = () => {
    let currentIngredients = useSelector(state => state.ingredients.ingredients);
    const [currentIngredient, setCurrentIngredient] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log(history);
        dispatch(getIngredients());
    }, [dispatch])

    useEffect(() => {
        setCurrentIngredient(currentIngredients.filter((item) => item._id === id)[0]);
    }, [currentIngredients])

    return (
        currentIngredients &&
        <div className={`${ingredientStyles.content} pt-10 pb-15 pl-10 pr-10`}>
            <h2 className="text text_type_main-large">Детали ингредиента</h2>
            <img src={currentIngredient && currentIngredient.image_large} alt={currentIngredient && currentIngredient.name} />
            <p className="text text_type_main-medium mt-4 mb-8 ml-25 mr-25">{currentIngredient && currentIngredient.name}</p>
            <table>
                <tbody>
                    <tr className="text text_type_main-default text_color_inactive">
                        <th className={ingredientStyles.content__row}>Калории,ккал</th>
                        <th className={ingredientStyles.content__row}>Белки, г</th>
                        <th className={ingredientStyles.content__row}>Жиры, г</th>
                        <th className={ingredientStyles.content__row}>Углеводы, г</th>
                    </tr>
                    <tr className={`${ingredientStyles.ingredient__details} text text_type_digits-default text_color_inactive`}>
                        <td className={ingredientStyles.content__row}>{currentIngredient && currentIngredient.calories}</td>
                        <td className={ingredientStyles.content__row}>{currentIngredient && currentIngredient.proteins}</td>
                        <td className={ingredientStyles.content__row}>{currentIngredient && currentIngredient.fat}</td>
                        <td className={ingredientStyles.content__row}>{currentIngredient && currentIngredient.carbohydrates}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
