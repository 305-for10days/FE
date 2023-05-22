import { atom } from "recoil";

interface infoAddProps {
    gender: string;
    height?: number;
    weight?: number;
    purpose: number;
    set: number;
    count: number;
}

export const initialize: infoAddProps = {
    gender: "",
    height: undefined,
    weight: undefined,
    purpose: 0,
    set: 0,
    count: 0,
};

export const infoAddState = atom<infoAddProps>({
    key: "infoAddState",
    default: initialize,
});
