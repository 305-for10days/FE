import { RoutineSaveProps } from "./../@types/RoutineType";
import { RecommendWorkOutProps } from "../@types/UserType";
import { customAxios } from "../libs/customAxios";

/**
 * Default 루틴 목록
 */
export const fetchRoutineList = async () => {
    const res = await customAxios({
        method: "get",
        url: "/api/routine",
    }).catch((e) => {
        console.log(e);
    });

    return res;
};

/**
 * 유저 루틴 목록
 */
export const fetchUserRoutineList = async () => {
    const res = await customAxios({
        method: "get",
        url: "/api/user/routine",
    }).catch((e) => {
        console.log(e);
    });

    return res;
};

/**
 * 운동 완료
 */
export const fetchCompleteWorkOut = async (data: RoutineSaveProps) => {
    const res = await customAxios({
        method: "post",
        url: "/api/user/routine",
        data: data,
    }).catch((e) => {
        console.log(e);
    });

    return res;
};

/**
 * 운동 목록 초기 데이터
 */
export const fetchWorkOutsList = async () => {
    const res = await customAxios({
        method: "get",
        url: "/api/workouts",
    }).catch((e) => {
        console.log(e);
    });

    return res;
};

/**
 * 운동 추천
 */
export const fetchWorkOutRecommend = async (data: RecommendWorkOutProps) => {
    const res = await customAxios({
        method: "post",
        url: "/api/workouts",
        data: data,
    }).catch((e) => {
        console.log(e);
    });

    return res;
};

/**
 * 결과 이모티콘 등록
 */
export const fetchCompleteEmojiSave = async (emojiId: number, routineId: number) => {
    const res = await customAxios({
        method: "post",
        url: "/api/user/routine/emoji",
        data: {
            emojiId,
            routineId,
        },
    }).catch((e) => console.log(e));

    return res;
};

/**
 * 메인 루틴 결과 리스트
 */
export const fetchCompleteRoutine = async (page = 1) => {
    const res = await customAxios({
        method: "get",
        url: `/api/main/${page}`,
    }).catch((e) => console.log(e));

    return res;
};
