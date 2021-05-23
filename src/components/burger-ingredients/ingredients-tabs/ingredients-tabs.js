import React from "react";

import tabsStyles from './ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default class IngredientsTabs extends React.Component {
    render() {
        return (
            <div className={ tabsStyles.ingredients__tabs }>
                <Tab value="Булки" active={ this.props.activeMeal === 'Булки' } onClick={ this.props.changeMeal }>
                    Булки
                </Tab>
                <Tab value="Соусы" active={ this.props.activeMeal === 'Соусы' } onClick={ this.props.changeMeal }>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={ this.props.activeMeal === 'Начинки' } onClick={ this.props.changeMeal }>
                    Начинки
                </Tab>
            </div>
        );
    }
}