import React from "react";

import ingredientStyles from './ingredients.module.css';
import Ingredient from "../ingredient/ingredient";

export default class Ingredients extends React.Component {
    constructor(props) {
        super(props);

        this.titles = [ 'Булки', 'Соусы', 'Начинки' ];
        this.mealsTypes = [ 'bun', 'sauce', 'main' ];
    }

    render() {
        return (
            <div className={`${ingredientStyles.ingredients} mt-10 mb-6 pl-1 pr-1`}>
                {
                    this.titles.map((title, i) => {
                        return (
                            <React.Fragment key={ i }>
                                <h4 className="text text_type_main-medium dashed mb-6">{ title }</h4>
                                <ul className={`${ingredientStyles.ingredients__list} dashed`}>
                                    {this.props.data.map(item => {
                                        if (item.type === this.mealsTypes[i]) {
                                            return (<Ingredient key={ item._id } item={ item } />);
                                        }
                                        return null;
                                        }
                                    )}
                                </ul>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        );
    }
}