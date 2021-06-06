import React from "react";

import popupStyles from './popup.module.css'
import cross from '../../images/cross.svg';
import doneButton from "../../images/done.svg";

export default function Modal({ title, onClose, children }) {
    return (
            <div className={`${popupStyles.popup__content} pt-10 pb-15 pl-10 pr-10`} onClick={e => e.stopPropagation()}>
                <div className={`mb-4 ${popupStyles.popup__base}`}>
                    {title &&
                    <h3 className={`text text_type_main-large ${popupStyles.popup__title}`}>{title}</h3>}
                    <img onClick={onClose} className={popupStyles.popup__cross} src={cross}
                         alt="закрытие окна"/>
                </div>
                <p className={`text text_type_digits-large ml-15 mr-15 mb-8 ${popupStyles.order__number}`}>034526</p>
                <h4 className={`text text_type_main-medium mb-15 ${popupStyles.popup__text_type_centered}`}>идентификатор
                    заказа</h4>
                <img className={popupStyles.popup__done} src={doneButton} alt="подтвердить заказ"/>
                <p className={`text text_type_main-default mt-15 mb-2 ${popupStyles.popup__text_type_centered}`}>Ваш
                    заказ начали готовить</p>
                <p className={`text text_type_main-default ${popupStyles.popup__text_type_centered}`}>Дождитесь
                    готовности на орбитальной станции</p>
                {children}
            </div>
    );
}