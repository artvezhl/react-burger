import React from "react";
import PropTypes from "prop-types";

import ingredientsStyles from './burger-ingredients.module.css'
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import Ingredients from "./ingredients/ingredients";

export default function BurgerIngredients(props) {
    const [activeMeal, setActiveMeal] = React.useState({
        name: 'Булки',
        type: 'bun',
    });

    const onTabClick = meal => {
        let mealType = '';
        switch (meal) {
            case 'Булки':
                mealType = 'bun';
                break;
            case 'Соусы':
                mealType = 'sauce';
                break;
            case 'Начинки':
                mealType = 'main';
                break;
            default:
                mealType = 'bun';
                break;
        }
        setActiveMeal({
            name: meal,
            type: mealType,
        })
    }

    return (
        <section className={`${ingredientsStyles.ingredients} ml-5 mr-10 pt-10`}>
            <h2 className="text text_type_main-large pb-2">Соберите бургер</h2>
            <IngredientsTabs
                activeMeal={ activeMeal.name }
                changeMeal={ onTabClick }
            />
            <Ingredients
                { ...props }
            />
        </section>
    );
}

BurgerIngredients.propTypes = {
    props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    })
}