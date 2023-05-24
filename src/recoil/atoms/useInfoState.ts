import { atom } from "recoil";
import { InfoAddProps } from "../../@types/UserType";

export const initialize: InfoAddProps = {
    gender: "",
    height: 0,
    weight: 0,
    severalTimesWeek: 0,
    minutePerWorkout: 0,
    bmi: "",
};

export const useInfoState = atom({
    key: "infoAddState",
    default: initialize,
});
