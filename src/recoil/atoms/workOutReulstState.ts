import { atom } from "recoil";
import { WorkOutProps } from "../../hooks/useWorkOuts";

export interface ReulstItemProps extends WorkOutProps {
    isSuccess: boolean;
}

export interface WorkOutResultProps {
    workouts: ReulstItemProps[];
    kcal: number;
}

export const initialize: WorkOutResultProps[] = [];

export const workOutResultState = atom<WorkOutResultProps[]>({
    key: "workOutResult",
    default: initialize,
});
