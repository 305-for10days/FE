import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { WorkOutInfoProps, workOutState } from "../recoil/atoms/workOutState";
import { RoutineInfoProps } from "../recoil/atoms/routineState";
// import { workOutResultState } from "../recoil/atoms/workOutReulstState";

export interface WorkOutProps {
    id: number;
    goal: string;
    set: number;
    isActive?: boolean;
    workoutId: number;
    detail?: WorkOutInfoProps;
}

export const useWorkOuts = () => {
    const workOutsInfo = useRecoilValue(workOutState);
    const [routineWorkOuts, setRoutineWorkOut] = useState<WorkOutProps[]>([]);
    const [checked, setChecked] = useState<number[]>([]);
    const [workOuts, setWorkOuts] = useState<WorkOutProps[]>([]);

    // const [results, setResults] = useRecoilValue(workOutResultState);

    const handleOnClickCheckWorkdOut = (id: number) => {
        if (checked.includes(id)) {
            setChecked((checkd) => checkd.filter((item) => item != id));
        } else {
            setChecked((checkd) => [...checkd, id]);
        }
    };

    const setWorkOutsState = (data: RoutineInfoProps) => {
        const newWorkState = data.details.map((item) => {
            const detail = workOutsInfo.find((work) => work.id === item.workoutId);
            return { ...item, goal: data.goal, id: data.id, isActive: false, detail: detail };
        });

        setRoutineWorkOut(newWorkState);
    };

    useEffect(() => {
        setWorkOuts(routineWorkOuts);
    }, [routineWorkOuts]);

    useEffect(() => {
        const newWorkOuts = routineWorkOuts.map((item) => {
            if (checked.includes(item.workoutId)) {
                return { ...item, isActive: true };
            } else {
                return { ...item, isActive: false };
            }
        });
        setWorkOuts(newWorkOuts);
    }, [checked]);

    return {
        workOuts,
        checked,
        setWorkOutsState,
        handleOnClickCheckWorkdOut,
    };
};
