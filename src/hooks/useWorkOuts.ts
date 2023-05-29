import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { WorkOutInfoProps, workOutState } from "../recoil/atoms/workOutState";
import { RoutineInfoProps } from "../recoil/atoms/routineState";

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
    const [isChange, setIsChange] = useState<boolean>(false);
    const [routineWorkOuts, setRoutineWorkOut] = useState<WorkOutProps[]>([]);
    const [checked, setChecked] = useState<number[]>([]);
    const [workOuts, setWorkOuts] = useState<WorkOutProps[]>([]);

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
            return { ...item, goal: data.goal, id: data.id, calorie: detail?.calorie, isActive: false, detail: detail };
        });

        setRoutineWorkOut(newWorkState);
    };

    const changeWorkOuts = (id: number, data: WorkOutProps) => {
        const find = workOuts.find((el) => el.workoutId === data.workoutId);
        if (!find) {
            setChecked((checkd) => checkd.filter((item) => item != id));
            const newWorkOuts = workOuts.map((item) => {
                if (item.workoutId === id) return data;

                return item;
            });
            setIsChange(true);
            setWorkOuts(newWorkOuts);
        } else {
            alert("같은 운동을 루틴에 추가할 수 없습니다.");
        }
    };

    const recommendWorkOut = (info: WorkOutProps) => {
        const { id, detail } = info;

        const recommendWorkOuts = workOutsInfo.filter((item) => {
            if (item.category === detail?.category && item.type === detail.type && item.id !== detail.id) {
                const find = workOuts.find((el) => el.workoutId === item.id);
                if (!find) {
                    return item;
                }
            }
        });

        if (recommendWorkOuts.length > 0) {
            const ramdomIdx = Math.floor(Math.random() * recommendWorkOuts.length);
            const recommendWorkOut = recommendWorkOuts[ramdomIdx];

            return {
                id: id,
                goal: info.goal,
                set: info.set,
                workoutId: recommendWorkOut.id,
                detail: recommendWorkOut,
                calorie: recommendWorkOut.calorie,
                completedSet: 0,
                isActive: false,
            };
        }
    };

    useEffect(() => {
        setWorkOuts(routineWorkOuts);
    }, [routineWorkOuts]);

    useEffect(() => {
        const newWorkOuts = workOuts.map((item) => {
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
        changeWorkOuts,
        recommendWorkOut,
        isChange,
        setIsChange,
    };
};
