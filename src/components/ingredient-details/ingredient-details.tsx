import React from "react";
import {useSelector} from "react-redux";

import detailsStyles from "./ingredient-details.module.css";
import {useParams} from "react-router-dom";

export default function IngredientDetails () {
    const { id } = useParams();
    const {image_large, name, calories, proteins, fat, carbohydrates} =
        useSelector(state => state.ingredients.ingredients.filter((item) => item._id === id )[0]);

    return(
        <>
            <img src={image_large} alt={name} />
            <p className="text text_type_main-medium mt-4 mb-8 ml-25 mr-25">{name}</p>
            <table>
                <tbody>
                    <tr className="text text_type_main-default text_color_inactive">
                        <th>Калории,ккал</th>
                        <th>Белки, г</th>
                        <th>Жиры, г</th>
                        <th>Углеводы, г</th>
                    </tr>
                    <tr className={`${detailsStyles.ingredient__details} text text_type_digits-default text_color_inactive`}>
                        <td>{calories}</td>
                        <td>{proteins}</td>
                        <td>{fat}</td>
                        <td>{carbohydrates}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
