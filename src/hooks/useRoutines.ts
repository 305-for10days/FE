import { useEffect } from "react";
import { fetchRoutineList } from "../api/WorkOutAPI";
import { useRecoilState } from "recoil";
import { routineState } from "../recoil/atoms/routineState";

export const useRoutines = () => {
    const [routines, setRoutines] = useRecoilState(routineState);

    useEffect(() => {
        (async () => {
            const res = await fetchRoutineList();
            setRoutines(res.data);
        })();
    }, []);

    return { routines };
};
