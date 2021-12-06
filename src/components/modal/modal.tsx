import React, {FC, useEffect} from "react";
import {createPortal} from "react-dom";

import ModalOverlay from "./modal-overlay";
import popupStyles from './popup.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TModalProps } from "./modal-types";

const modalRoot: any = document.getElementById("react-modals");

const Modal: FC<TModalProps> = ({ title, onClose, children }) => {
    useEffect(() => {
        function onEscKeyDown(e: any) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onEscKeyDown);
        return () => {
            document.removeEventListener("keydown", onEscKeyDown);
        }
    },[onClose])

    return createPortal(
        (
            <ModalOverlay onClose={onClose} >
                <div className={`${popupStyles.popup__content} pt-10 pb-15 pl-10 pr-10`} onClick={e => e.stopPropagation()}>
                    <div className={`mb-4 ${popupStyles.popup__base}`}>
                        {title &&
                        <h3 className={`text text_type_main-large ${popupStyles.popup__title}`}>{title}</h3>}
                        <div onClick={onClose} className={popupStyles.popup__cross}>
                            <CloseIcon type="primary" />
                        </div>
                    </div>
                    {children}
                </div>
            </ModalOverlay>
    ), modalRoot);
}

export default Modal;
