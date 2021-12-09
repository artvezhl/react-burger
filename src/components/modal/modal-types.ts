import {SyntheticEvent} from "react";

export type TModalOverlayProps = {
    readonly onClose: (e: KeyboardEvent | SyntheticEvent) => void;
};

export type TModalProps = TModalOverlayProps & {
    readonly title?: string;
};
