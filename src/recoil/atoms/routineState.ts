import { atom } from "recoil";

export interface RoutineInfoProps {
    id: number;
    goal: string;
    details: [{ set: number; workoutId: number }];
}

export const initialize: RoutineInfoProps[] = [];

export const routineState = atom<RoutineInfoProps[]>({
    key: "routineInfoList",
    default: initialize,
});
