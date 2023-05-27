import { atom } from "recoil";

interface WorkOutCompleteProps {
    isCompletedIn: boolean;
    calorie: number;
}

export const initialize: WorkOutCompleteProps = {
    isCompletedIn: false,
    calorie: 0,
};

export const workOutCompleteState = atom<WorkOutCompleteProps>({
    key: "workOutCompleteState",
    default: initialize,
});
