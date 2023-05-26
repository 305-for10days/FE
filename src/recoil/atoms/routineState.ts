import { atom } from "recoil";

interface RoutineWorkOutProps {
    id: number;
    goal: string;
    details: [{ set: number; workOutId: number }];
}

interface RoutineInfoProps {
    goal: string;
    routine: RoutineWorkOutProps[];
}

export const initialize: RoutineInfoProps[] = [];

export const routineState = atom<RoutineInfoProps[]>({
    key: "routineInfoList",
    default: initialize,
});
