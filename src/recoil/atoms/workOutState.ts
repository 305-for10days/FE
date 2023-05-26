import { atom } from "recoil";

export interface WorkOutInfoProps {
    id: number;
    category: string;
    name: string;
    description: string;
    calorie: number;
    count: number;
    distance: string;
    time: string;
    type: string;
    weight: number;
}

export const initialize: WorkOutInfoProps[] = [];

export const workOutState = atom<WorkOutInfoProps[]>({
    key: "workOutInfoList",
    default: initialize,
});
