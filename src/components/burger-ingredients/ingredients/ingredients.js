import React from "react";
import PropTypes from 'prop-types';

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
                                <h4 className="text text_type_main-medium mb-6">{ title }</h4>
                                <ul className={ingredientStyles.ingredients__list}>
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

Ingredients.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            proteins: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            image_mobile: PropTypes.string.isRequired,
            image_large: PropTypes.string.isRequired,
        })
    ).isRequired,
}
