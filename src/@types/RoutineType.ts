import { WorkoutSaveProps } from "./WorkOutType";

export interface NewRoutineSaveProps {
    goal: string;
    details: WorkoutSaveProps[];
}

export interface RoutineSaveProps extends NewRoutineSaveProps {
    id: number;
}

export interface WorkOutRecordProps {
    routineId: number;
    calories: number;
    emojiId: number;
    goal: string;
    date: number[];
}
