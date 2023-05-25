import { atom } from "recoil";

interface WorkOutCompleteProps {
    isCompletedIn: boolean;
}

export const initialize: WorkOutCompleteProps = {
    isCompletedIn: false,
};

export const workOutCompleteState = atom<WorkOutCompleteProps>({
    key: "workOutCompleteState",
    default: initialize,
});
