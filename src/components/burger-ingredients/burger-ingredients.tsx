import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ingredientsStyles from './burger-ingredients.module.css';
import IngredientsTabs from './ingredients-tabs/ingredients-tabs';
import Ingredients from './ingredients/ingredients';
import { SET_ACTIVE_TAB } from '../../services/constants';
import { CommonStateType } from '../../services/reducers/reducers-types';

const BurgerIngredients = () => {
    const { ingredients, isLoading, hasError, activeTab } = useSelector((state: CommonStateType) => ({
        ingredients: state.ingredients.ingredients,
        isLoading: state.ingredients.ingredientsRequest,
        hasError: state.ingredients.ingredientsFailed,
        activeTab: state.ingredients.activeTab,
    }));
    const dispatch = useDispatch();

    const onTabClick = (meal: string) => {
        let mealType = '';
        switch (meal) {
            case 'Булки':
                mealType = 'Булки';
                break;
            case 'Соусы':
                mealType = 'Соусы';
                break;
            case 'Начинки':
                mealType = 'Начинки';
                break;
            default:
                mealType = 'Булки';
                break;
        }
        dispatch({
            type: SET_ACTIVE_TAB,
            tab: mealType,
        });
    };

    const ingredientsContent = hasError ? (
        <div className={`text text_type_main-medium ${ingredientsStyles.ingredients__loading}`}>
            Что-то пошло не так, перезагрузите страницу
        </div>
    ) : !isLoading && !hasError && ingredients.length ? (
        <Ingredients data={ingredients} />
    ) : (
        <div className={`text text_type_main-large ${ingredientsStyles.ingredients__loading}`}>
            Здесь Вы увидите ингредиенты для бургера ...
        </div>
    );

    return (
        <section className={`${ingredientsStyles.ingredients} ml-5 mr-10 pt-10`}>
            <h2 className="text text_type_main-large pb-2">Соберите бургер</h2>
            <IngredientsTabs activeMeal={activeTab} changeMeal={onTabClick} />
            {ingredientsContent}
        </section>
    );
};

export default BurgerIngredients;
