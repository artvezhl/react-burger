import React, {useContext, useState} from "react";

import totalStyles from './constructor-cart.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../order-details/order-details";
import {ConstructorContext} from "../../../services/constructorContext";
import {ORDER_URL} from "../../../constants";

export default function ConstructorCart() {
    const { constructorState, constructorDispatcher } = useContext(ConstructorContext);
    const { total, ingredientsIDs } = constructorState;

    const [visibleModal, setVisibleModal] = useState(false);
    const getOrderNumber = async () => {
        try {
            const res = await fetch(ORDER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    "ingredients": ingredientsIDs,
                }),
            })
            if (res.ok) {
                const data = await res.json();
                constructorDispatcher({
                    type: 'order',
                    payload: data.order.number,
                });
            } else {
                throw new Error('Error when attempt to receive order');
            }
        } catch(e) {
            console.log(e);
        }
    }

    const openModal = () => {
        setVisibleModal(true);
    }

    const closeModal = () => {
        setVisibleModal(false);
    }

    const modal = (
        <Modal onClose={ closeModal }>
            <OrderDetails />
        </Modal>
    );

    const orderHandler = () => {
        getOrderNumber()
            .then(() => {
                openModal();
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className={`${totalStyles.constructor__total} mt-10 mb-9`}>
            <p className={`${ totalStyles.constructor__price } text text_type_digits-medium`}>{total}</p>
            <CurrencyIcon type="primary" />
            <Button onClick={orderHandler} type="primary" size="large">
                Оформить заказ
            </Button>
            { visibleModal && modal }
        </div>
    );
}
