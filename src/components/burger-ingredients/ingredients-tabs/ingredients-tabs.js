import React from "react";

import tabsStyles from './ingredients-tabs.module.css';

export default class IngredientsTabs extends React.Component {
    render() {
        return (
            <ul className={ tabsStyles.ingredients__tabs }>
                {this.props.meals.map((meal, i) => {
                    const activeTab = this.props.activeMeal === meal ? tabsStyles.ingredient_active : '';

                    return (
                        <li
                            key={ i }
                            className=
                                {
                                    `text text_type_main-default dashed pt-4 pb-4 
                                    ${ tabsStyles.ingredient } 
                                    ${ activeTab }`
                                }
                            onClick={ this.props.changeMeal }
                        >{ meal }</li>
                    )
                })}
            </ul>
        );
    }
}