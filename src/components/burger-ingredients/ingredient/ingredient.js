import React from "react";

import ingredientStyles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Ingredient extends React.Component {
    render() {
        return (
            <li className={ ingredientStyles.ingredient }>
                <img src={ this.props.item.image } alt={ this.props.item.name }/>
                <div className={`${ ingredientStyles.ingredient__priceWrapper } text text_type_digits-default mt-1 mb-1`}>
                    <p className={ ingredientStyles.ingredient__price }>{ this.props.item.price }</p>
                    <CurrencyIcon className="ml-2" type="primary dashed" />
                </div>
                <p
                    className={`text text_type_main-default ${ ingredientStyles.ingredient__name }`}
                >{ this.props.item.name }</p>
                <Counter count={1} size="default"/>
            </li>
        );
    }
}