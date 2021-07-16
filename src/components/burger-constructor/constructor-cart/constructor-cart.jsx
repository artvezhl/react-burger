import React, {useState} from "react";
import {useSelector} from "react-redux";

import totalStyles from './constructor-cart.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../order-details/order-details";

export default function ConstructorCart() {
    const [visibleModal, setVisibleModal] = useState(false);
    const total = useSelector(state => state.burger.total);

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
        openModal();
    }

    return (
        total
        ? <div className={`${totalStyles.constructor__total} mt-10 mb-9`}>
            <p className={`${ totalStyles.constructor__price } text text_type_digits-medium`}>{total}</p>
            <CurrencyIcon type="primary" />
            <Button onClick={orderHandler} type="primary" size="large">
                Оформить заказ
            </Button>
            { visibleModal && modal }
        </div>
        : ''
    );
}
