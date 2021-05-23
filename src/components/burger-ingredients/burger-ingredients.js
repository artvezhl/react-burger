import React from "react";

import { data } from '../../utils/data';
import ingredientsStyles from './burger-ingredients.css';
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import Ingredients from "./ingredients/ingredients";

export default class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        activeMeal: 'Булки',
        activeMealType: 'bun',
    }
    // TODO рефакторить функцию ниже
    onTabClick = meal => {
        // const clickedTabName = e.target.value;
        // console.log(e);
        let mealType = '';
        if (meal === 'Булки') {
            mealType = 'bun';
        }
        if (meal === 'Соусы') {
            mealType = 'sauce';
        }
        if (meal === 'Начинки') {
            mealType = 'main';
        }
        this.setState({
            activeMeal: meal,
            activeMealType: mealType,
        })
    }

    render() {
        return (
            <section className={`solid ml-5 pt-10`}>
                <h2 className="text text_type_main-large dashed pb-2">Соберите бургер</h2>
                <IngredientsTabs
                    activeMeal={ this.state.activeMeal }
                    changeMeal={ this.onTabClick }
                />
                <Ingredients
                    title={ this.state.activeMeal }
                    data={ data }
                    activeMealType={ this.state.activeMealType }
                />
            </section>
        );
    }
}