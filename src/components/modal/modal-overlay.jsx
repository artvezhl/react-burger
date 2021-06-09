import React, {useEffect} from "react";
import PropTypes from "prop-types";

import popupStyles from "./popup.module.css";

export default function ModalOverlay({ onClose, onEscPress, children }) {
    useEffect(() => {
        document.addEventListener("keydown", onEscPress);
        return () => {
            document.addEventListener("keydown", onEscPress);
        }
    })

    return (
        <div className={popupStyles.popup__overlay} onClick={onClose}>
            {children}
        </div>
    );
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}