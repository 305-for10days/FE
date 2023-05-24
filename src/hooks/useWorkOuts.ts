import { useEffect, useRef, useState } from "react";
import { ROUTINE_WORKOUT_DATES } from "../constants/data";

interface WorkOutProps {
    id: number;
    title: string;
    times: number;
    set: number;
    isActive?: boolean;
}

export const useWorkOuts = (id: number) => {
    const workOutRef = useRef(ROUTINE_WORKOUT_DATES);
    const [checkd, setChecked] = useState<number[]>([]);
    const [workOuts, setWorkOuts] = useState<WorkOutProps[]>(workOutRef.current);

    const handleOnClickCheckWorkdOut = (id: number) => {
        if (checkd.includes(id)) {
            setChecked((checkd) => checkd.filter((item) => item != id));
        } else {
            setChecked((checkd) => [...checkd, id]);
        }

        console.log(checkd, id);
    };

    useEffect(() => {
        const newWorkOuts = workOutRef.current.map((item) => {
            if (checkd.includes(item.id)) {
                return { ...item, isActive: true };
            } else {
                return { ...item, isActive: false };
            }
        });
        setWorkOuts(newWorkOuts);
    }, [checkd]);

    return {
        workOuts,
        handleOnClickCheckWorkdOut,
    };
};
