import { customAxios } from "../libs/customAxios";
import { InfoAddProps } from "../@types/UserType";

// 개인 정보 입력
export const fetchAddUserInfo = async (data: InfoAddProps) => {
    const res = await customAxios({
        method: "post",
        url: "/api/profile",
        data: data,
    });

    return res;
};
