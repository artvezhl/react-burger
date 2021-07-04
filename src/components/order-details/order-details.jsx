import React, {useEffect} from "react";

import orderStyles from "./order-details.module.css";
import doneButton from "../../images/done.svg";
import {useDispatch, useSelector} from "react-redux";
import { getOrderNumber } from "../../services/actions/order-details";

export default function OrderDetails() {
    const { ingredientIDs, orderNumber } = useSelector(state => ({
        ingredientIDs: state.burger.ingredientIDs,
        orderNumber: state.order.number,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderNumber(ingredientIDs));
    }, [dispatch, ingredientIDs])

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
