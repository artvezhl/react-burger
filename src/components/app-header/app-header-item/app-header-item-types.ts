import { Dispatch, SetStateAction } from "react";

export type TAppHeaderItemProps = {
    text: string;
    path: string;
    setHover: Dispatch<SetStateAction<boolean>>;
};
