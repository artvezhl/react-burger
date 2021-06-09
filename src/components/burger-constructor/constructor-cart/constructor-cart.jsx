import React, {useState} from "react";

import totalStyles from './constructor-cart.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../order-details/order-details";
import { orderData } from "../../../utils/data";

export default function ConstructorCart() {
    const [visibleModal, setVisibleModal] = useState(false);

    const openModal = () => {
        setVisibleModal(true);
    }

    const closeModal = () => {
        setVisibleModal(false);
    }


    const modal = (
        <Modal onClose={ closeModal }>
            <OrderDetails orderNumber={orderData.number} />
        </Modal>
    );

    return (
        <div className={`${totalStyles.constructor__total} mt-10 mb-9`}>
            <p className={`${ totalStyles.constructor__price } text text_type_digits-medium`}>610</p>
            <CurrencyIcon type="primary" />
            <Button onClick={openModal} type="primary" size="large">
                Оформить заказ
            </Button>
            { visibleModal && modal }
        </div>
    );
}