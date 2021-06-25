import React, {useContext} from "react";

import orderStyles from "./order-details.module.css";
import doneButton from "../../images/done.svg";
import {ConstructorContext} from "../../services/constructorContext";

export default function OrderDetails() {
    const { constructorState } = useContext(ConstructorContext);
    const { orderNumber } = constructorState;

    return (
        <>
            <p className={`text text_type_digits-large ml-15 mr-15 mb-8 ${orderStyles.order__number}`}>{orderNumber}</p>
            <h4 className={`text text_type_main-medium mb-15 ${orderStyles.order__text_type_centered}`}>идентификатор
                заказа</h4>
            <img className={orderStyles.order__done} src={doneButton} alt="подтвердить заказ"/>
            <p className={`text text_type_main-default mt-15 mb-2 ${orderStyles.order__text_type_centered}`}>Ваш
                заказ начали готовить</p>
            <p className={`text text_type_main-default ${orderStyles.order__text_type_centered}`}>Дождитесь
                готовности на орбитальной станции</p>
        </>
    );
}
