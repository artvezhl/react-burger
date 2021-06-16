import React, {useContext, useEffect} from "react";
import PropTypes from "prop-types";

import orderStyles from "./order-details.module.css";
import doneButton from "../../images/done.svg";
import {ConstructorContext} from "../../services/constructorContext";
import { ORDER_URL } from "../../constants";

export default function OrderDetails() {
    const { constructorState, constructorDispatcher } = useContext(ConstructorContext);
    const { orderNumber } = constructorState;

    useEffect(() => {
        const ingredientsID = [];
        constructorState.ingredients.forEach(ingredient => ingredientsID.push(ingredient._id));
        const orderNumberData = async () => {
            try {
                const res = await fetch(ORDER_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify ({
                        "ingredients": ingredientsID,
                    }),
                })
                if (res.ok) {
                    const data = await res.json();
                    constructorDispatcher({
                        type: 'order',
                        payload: data.order.number,
                    });
                } else {
                    throw Error('Error when attempt to receive order');
                }
            } catch(e) {
                console.log(e);
            }
        }
        orderNumberData();
    }, [constructorState.ingredients])

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

OrderDetails.propTypes = {
    orderNumber: PropTypes.string.isRequired,
}