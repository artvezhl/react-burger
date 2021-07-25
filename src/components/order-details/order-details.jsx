import React, {useEffect} from "react";

import orderStyles from "./order-details.module.css";
import doneButton from "../../images/done.svg";
import {useDispatch, useSelector} from "react-redux";
import { getOrderNumber } from "../../services/actions/order-details";

export default function OrderDetails() {
    const { ingredientIDs, orderNumber, orderNumberRequest, orderNumberFailed } = useSelector(state => ({
        ingredientIDs: state.burger.ingredientIDs,
        orderNumber: state.order.number,
        orderNumberRequest: state.order.orderNumberRequest,
        orderNumberFailed: state.order.orderNumberFailed,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderNumber(ingredientIDs));
    }, [dispatch, ingredientIDs])

    return (
        orderNumberRequest
            ? <h4 className={`text text_type_main-medium mb-15 ${orderStyles.order__text_type_centered}`}>Ожидайте заказ формируется</h4>
            : orderNumberFailed
            ? <h4 className={`text text_type_main-medium mb-15 ${orderStyles.order__text_type_centered}`}>Что-то пошло не так, попробуйте заново</h4>
            : <>
                <p className={`text text_type_digits-large ml-15 mr-15 mb-8 ${orderStyles.order__number}`}>{orderNumber}</p>
                <h4 className={`text text_type_main-medium mb-15 ${orderStyles.order__text_type_centered}`}>идентификатор заказа</h4>
                <img className={orderStyles.order__done} src={doneButton} alt="подтвердить заказ"/>
                <p className={`text text_type_main-default mt-15 mb-2 ${orderStyles.order__text_type_centered}`}>Ваш
                заказ начали готовить</p>
                <p className={`text text_type_main-default ${orderStyles.order__text_type_centered}`}>Дождитесь
                готовности на орбитальной станции</p>
            </>
    );
}
