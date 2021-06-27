import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import ingredientsStyles from './burger-ingredients.module.css'
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import Ingredients from "./ingredients/ingredients";
import { getIngredients } from "../../services/actions/burger-ingredients";

export default function BurgerIngredients() {
    const { ingredients, isLoading, hasError } = useSelector(state => ({
        ingredients: state.ingredients.items,
        isLoading: state.ingredients.ingredientsRequest,
        hasError: state.ingredients.ingredientsFailed,
    }));
    const dispatch = useDispatch();
    const [activeMeal, setActiveMeal] = React.useState({
        name: 'Булки',
        type: 'bun',
    });

    useEffect(() => {
        dispatch(getIngredients());
    }, [])

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

    const ingredientsContent = hasError
        ? <div className={`text text_type_main-medium ${ingredientsStyles.ingredients__loading}`}>Что-то пошло не так, перезагрузите страницу</div>
        : !isLoading && !hasError && ingredients.length
        ? <Ingredients data={ingredients}/>
        : <div className={`text text_type_main-large ${ingredientsStyles.ingredients__loading}`}>Здесь Вы увидите ингредиенты для бургера ...</div>;

    return (
        <section className={`${ingredientsStyles.ingredients} ml-5 mr-10 pt-10`}>
            <h2 className="text text_type_main-large pb-2">Соберите бургер</h2>
            <IngredientsTabs
                activeMeal={ activeMeal.name }
                changeMeal={ onTabClick }
            />
            { ingredientsContent }
        </section>
    );
}