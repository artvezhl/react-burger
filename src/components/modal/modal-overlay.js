import React from "react";
import PropTypes from "prop-types";

import popupStyles from "./popup.module.css";

export default function ModalOverlay({ onClose, children }) {
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