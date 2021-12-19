import React, { useState, FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import totalStyles from './constructor-cart.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../modal/modal';
import OrderDetails from '../../order-details/order-details';
import { RESET_ORDER_NUMBER } from '../../../services/constants';
import { useHistory } from 'react-router-dom';
import { CommonStateType } from '../../../services/reducers/reducers-types';
import { THistoryState } from './constructor-cart-types';

const ConstructorCart: FC = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const { total, user } = useSelector((state: CommonStateType) => ({
        total: state.burger.total,
        user: state.auth.user,
    }));
    const dispatch = useDispatch();
    const history = useHistory<THistoryState>();

    const openModal = (): void => {
        setVisibleModal(true);
    };

    const closeModal = (): void => {
        setVisibleModal(false);
        dispatch({
            type: RESET_ORDER_NUMBER,
        });
    };

    const modal = (
        <Modal onClose={closeModal}>
            <OrderDetails />
        </Modal>
    );

    const orderHandler = (): void => {
        user
            ? openModal()
            : history.replace({
                  pathname: '/login',
              });
    };

    return total ? (
        <div className={`${totalStyles.constructor__total} mt-10 mb-9`}>
            <p className={`${totalStyles.constructor__price} text text_type_digits-medium`}>{total}</p>
            <CurrencyIcon type="primary" />
            <Button onClick={orderHandler} type="primary" size="large">
                Оформить заказ
            </Button>
            {visibleModal && modal}
        </div>
    ) : null;
};

export default ConstructorCart;
