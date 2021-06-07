import React from "react";
import PropTypes from "prop-types";

import tabsStyles from './ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default function IngredientsTabs({ activeMeal, changeMeal }) {
    return (
        <div className={ tabsStyles.ingredients__tabs }>
            <Tab value="Булки" active={ activeMeal === 'Булки' } onClick={ changeMeal }>
                Булки
            </Tab>
            <Tab value="Соусы" active={ activeMeal === 'Соусы' } onClick={ changeMeal }>
                Соусы
            </Tab>
            <Tab value="Начинки" active={ activeMeal === 'Начинки' } onClick={ changeMeal }>
                Начинки
            </Tab>
        </div>
    );
}

IngredientsTabs.propTypes = {
    activeMeal: PropTypes.string.isRequired,
    changeMeal: PropTypes.func.isRequired,
}