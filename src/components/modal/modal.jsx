import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

import ModalOverlay from "./modal-overlay.js";
import popupStyles from './popup.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

export default function Modal({ title, onClose, children }) {
    function onEscKeyDown(e) {
        if (e.key === "Escape") onClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", onEscKeyDown);
        return () => {
            document.addEventListener("keydown", onEscKeyDown);
        }
    })

    return createPortal(
        (
        <>
            <ModalOverlay onClose={onClose} >
                <div className={`${popupStyles.popup__content} pt-10 pb-15 pl-10 pr-10`} onClick={e => e.stopPropagation()}>
                    <div className={`mb-4 ${popupStyles.popup__base}`}>
                        {title &&
                        <h3 className={`text text_type_main-large ${popupStyles.popup__title}`}>{title}</h3>}
                        <div onClick={onClose} className={popupStyles.popup__cross}>
                            <CloseIcon/>
                        </div>
                    </div>
                    {children}
                </div>
            </ModalOverlay>
        </>
    ), modalRoot);
}

Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}