import React, {FC} from "react";

import popupStyles from "./popup.module.css";
import { TModalOverlayProps } from "./modal-types";

const ModalOverlay: FC<TModalOverlayProps> = ({ onClose, children }) => {
    return (
        <div className={popupStyles.popup__overlay} onClick={onClose}>
            {children}
        </div>
    );
}

export default ModalOverlay;
