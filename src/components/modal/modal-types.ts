export type TModalOverlayProps = {
    readonly onClose: () => void;
};

export type TModalProps = TModalOverlayProps & {
    readonly title?: string;
};
