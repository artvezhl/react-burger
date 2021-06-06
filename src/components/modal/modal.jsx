import React from "react";

import popupStyles from './popup.module.css'
import cross from '../../images/cross.svg';

export default function Modal({ title, onClose, children }) {
    return (
            <div className={`${popupStyles.popup__content} pt-10 pb-15 pl-10 pr-10`} onClick={e => e.stopPropagation()}>
                <div className={`mb-4 ${popupStyles.popup__base}`}>
                    {title &&
                    <h3 className={`text text_type_main-large ${popupStyles.popup__title}`}>{title}</h3>}
                    <img onClick={onClose} className={popupStyles.popup__cross} src={cross}
                         alt="закрытие окна"/>
                </div>
                {children}
            </div>
    );
}