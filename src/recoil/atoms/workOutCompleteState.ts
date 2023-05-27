import { atom } from "recoil";
import { WorkOutProps } from "../../hooks/useWorkOuts";

interface WorkOutCompleteProps {
    isCompletedIn: boolean;
    calorie: number;
    workOuts: WorkOutProps[];
}

export const initialize: WorkOutCompleteProps = {
    isCompletedIn: false,
    calorie: 0,
    workOuts: [],
};

export const workOutCompleteState = atom<WorkOutCompleteProps>({
    key: "workOutCompleteState",
    default: initialize,
});
