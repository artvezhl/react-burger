import React from "react";
import {createPortal} from "react-dom";

import ModalOverlay from "./modal-overlay";
import popupStyles from './popup.module.css'
import cross from '../../images/cross.svg';

const modalRoot = document.getElementById("react-modals");

export default function Modal({ title, onClose, children }) {
    return createPortal(
        (
        <>
            <ModalOverlay>
                <div className={`${popupStyles.popup__content} pt-10 pb-15 pl-10 pr-10`} onClick={e => e.stopPropagation()}>
                    <div className={`mb-4 ${popupStyles.popup__base}`}>
                        {title &&
                        <h3 className={`text text_type_main-large ${popupStyles.popup__title}`}>{title}</h3>}
                        <img onClick={onClose} className={popupStyles.popup__cross} src={cross}
                             alt="закрытие окна"/>
                    </div>
                    {children}
                </div>
            </ModalOverlay>
        </>
    ), modalRoot);
}