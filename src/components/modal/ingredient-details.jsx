import React from "react";

import detailsStyles from "./ingredient-details.module.css";

export default function IngredientDetails (props) {
    return(
        <>
            <img src="https://code.s3.yandex.net/react/code/meat-01-large.png" alt="name"/>
            <p className="text text_type_main-medium mt-4 mb-8 ml-25 mr-25">Биокотлета из марсианской Магнолии</p>
            <table>
                <tbody>
                    <tr className="text text_type_main-default text_color_inactive">
                        <th>Калории,ккал</th>
                        <th>Белки, г</th>
                        <th>Жиры, г</th>
                        <th>Углеводы, г</th>
                    </tr>
                    <tr className={`${detailsStyles.ingredient__details} text text_type_digits-default text_color_inactive`}>
                        <td>244,4</td>
                        <td>12,2</td>
                        <td>17,2</td>
                        <td>10,2</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}