import React from "react";

import ingredientStyles from './ingredients.module.css';
import Ingredient from "../ingredient/ingredient";

export default class Ingredients extends React.Component {
    render() {
        return (
            <div className={`${ingredientStyles.ingredients} mt-10 mb-6 pl-1 pr-1`}>
                <h4 className="text text_type_main-medium dashed mb-6">{ this.props.title }</h4>
                <ul className={`${ingredientStyles.ingredients__list} dashed`}>
                    {
                        this.props.data.map(item => {
                            if (item.type === this.props.activeMealType) {
                                return <Ingredient key={ item._id } item={ item } />;
                            } else {
                                return null;
                            }
                        })
                    }

                </ul>
            </div>
        );
    }
}