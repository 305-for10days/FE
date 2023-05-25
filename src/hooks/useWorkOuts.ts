import { useEffect, useRef, useState } from "react";
import { ROUTINE_WORKOUT_DATAS } from "../constants/data";

interface WorkOutProps {
    id: number;
    title: string;
    times: number;
    set: number;
    isActive?: boolean;
}

export const useWorkOuts = () => {
    const workOutRef = useRef(ROUTINE_WORKOUT_DATAS);
    const [checked, setChecked] = useState<number[]>([]);
    const [workOuts, setWorkOuts] = useState<WorkOutProps[]>(workOutRef.current);

    const handleOnClickCheckWorkdOut = (id: number) => {
        if (checked.includes(id)) {
            setChecked((checkd) => checkd.filter((item) => item != id));
        } else {
            setChecked((checkd) => [...checkd, id]);
        }
    };

    useEffect(() => {
        const newWorkOuts = workOutRef.current.map((item) => {
            if (checked.includes(item.id)) {
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
        handleOnClickCheckWorkdOut,
    };
};
