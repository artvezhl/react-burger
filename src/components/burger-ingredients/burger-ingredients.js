import React from "react";

import { data } from '../../utils/data';
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import Ingredients from "./ingredients/ingredients";

export default class BurgerIngredients extends React.Component {
    state = {
        activeMeal: 'Булки',
        activeMealType: 'bun',
    }

    onTabClick = meal => {
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
                    data={ data }
                />
            </section>
        );
    }
}