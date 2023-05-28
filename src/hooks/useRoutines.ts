import { useEffect } from "react";
import { fetchRoutineList, fetchUserRoutineList } from "../api/WorkOutAPI";
import { useRecoilState } from "recoil";
import { RoutineInfoProps, routineState } from "../recoil/atoms/routineState";

export const useRoutines = () => {
    const [routines, setRoutines] = useRecoilState(routineState);

    const getRoutineWorkOuts = (id: number) => {
        return routines.find((item) => item.id === id);
    };

    useEffect(() => {
        (async () => {
            const res = await fetchRoutineList();
            if (res?.status === 200) {
                const resp = await fetchUserRoutineList();

                const newRoutines = res.data.map((routine: RoutineInfoProps) => {
                    const newRoutine = resp?.data.find((item: RoutineInfoProps) => item.goal === routine.goal);
                    if (newRoutine) return newRoutine;
                    return routine;
                });

                setRoutines(newRoutines);
            }
        })();
    }, []);

    return { routines, getRoutineWorkOuts };
};
