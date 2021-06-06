import React from "react";
import ReactDom from "react-dom";

import popupStyles from "./popup.module.css";

const modalRoot = document.getElementById("react-modals");

export default class ModalOverlay extends React.Component {
    render() {
        return ReactDom.createPortal(
            (
                <div className={popupStyles.popup__overlay}>
                    {this.props.children}
                </div>
            ),
            modalRoot
        );
    }
}