import React, {useEffect} from "react";
import {createPortal} from "react-dom";

import popupStyles from "./popup.module.css";

const modalRoot = document.getElementById("react-modals");

export default function ModalOverlay({ onClose, children }) {
    function onEscClick(e) {
        if (e.key === "Escape") onClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", onEscClick);
        return () => {
            document.addEventListener("keydown", onEscClick);
        }
    })

    return createPortal(
        (
            <div className={popupStyles.popup__overlay}
                 onClick={onClose}
            >
                {children}
            </div>
        ),
        modalRoot
    );
}