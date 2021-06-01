import React from "react";

import popupStyles from './popup.module.css'
import doneButton from '../../images/done.svg';
import cross from '../../images/cross.svg'

export default class IdPopup extends React.Component {
    render() {
        return (
            <div className={ popupStyles.popup__overlay }>
                <div className={`${popupStyles.popup__content} pt-30 pb-30 pl-25 pr-25`}>
                    <img onClick={this.props.onClose} className={ popupStyles.popup__cross } src={ cross } alt="закрытие окна"/>
                    <p className={`text text_type_digits-large mb-8 ${ popupStyles.order__number }`}>034526</p>
                    <h4  className={`text text_type_main-medium mb-15 ${ popupStyles.popup__text_type_centered }`}>идентификатор заказа</h4>
                    <img className={ popupStyles.popup__done } src={ doneButton } alt="подтвердить заказ"/>
                    <p className={`text text_type_main-default mt-15 mb-2 ${ popupStyles.popup__text_type_centered }`}>Ваш заказ начали готовить</p>
                    <p className={`text text_type_main-default ${ popupStyles.popup__text_type_centered }`}>Дождитесь готовности на орбитальной станции</p>
                </div>
            </div>
        )
    }
}