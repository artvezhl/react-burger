import React from "react";

import tabsStyles from './ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default class IngredientsTabs extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
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
            // <ul className={ tabsStyles.ingredients__tabs }>
            //     {this.props.meals.map((meal, i) => {
            //         const activeTab = this.props.activeMeal === meal ? tabsStyles.ingredient_active : '';
            //
            //         return (
            //             <li
            //                 key={ i }
            //                 className=
            //                     {
            //                         `text text_type_main-default dashed pt-4 pb-4
            //                         ${ tabsStyles.ingredient }
            //                         ${ activeTab }`
            //                     }
            //                 onClick={ this.props.changeMeal }
            //             >{ meal }</li>
            //         )
            //     })}
            // </ul>
        );
    }
}