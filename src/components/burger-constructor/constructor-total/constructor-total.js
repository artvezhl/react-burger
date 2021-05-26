import React from "react";

import totalStyles from './constructor-total.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default class ConstructorTotal extends React.Component {
    render() {
        return (
            <div className={`${totalStyles.constructor__total} mt-10 mb-9`}>
                <p className={`${ totalStyles.constructor__price } text text_type_digits-medium`}>610</p>
                <CurrencyIcon type="primary" />
                <Button onClick={this.props.onOpen} type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        );
    }
}