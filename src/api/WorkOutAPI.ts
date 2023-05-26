import { customAxios } from "../libs/customAxios";

// 기본 루틴 정보
export const fetchRoutineList = async () => {
    const res = await customAxios({
        method: "get",
        url: "/api/routine",
    });

    return res;
};

// 유저 루틴 목록
export const fetchUserRoutineList = async () => {
    const res = await customAxios({
        method: "get",
        url: "/api/user/routine",
    });

    return res;
};

// 운동 완료
export const fetchCompleteWorkOut = async () => {
    const res = await customAxios({
        method: "post",
        url: "/api/user/routine",
        data: {},
    });

    return res;
};

// 운동 목록 초기 데이터
export const fetchWorkOutsList = async () => {
    const res = await customAxios({
        method: "get",
        url: "/api/workouts",
    });

    return res;
};
