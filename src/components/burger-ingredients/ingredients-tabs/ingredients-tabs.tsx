import React, {FC} from "react";

import tabsStyles from './ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredientsTabs } from './ingredients-tabs-types';

const IngredientsTabs: FC<TIngredientsTabs> = ({ activeMeal, changeMeal }) => {
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

export default IngredientsTabs;
