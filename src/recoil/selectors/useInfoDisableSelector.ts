import { selector } from "recoil";
import { useInfoState } from "../atoms/useInfoState";

export const userInfoDisabledSelector = selector({
    key: "useInfoDisabledSelector",
    get: ({ get }) => {
        const value = get(useInfoState);

        for (const key in value) {
            if (value[key] === 0 || !value[key]) {
                return true;
            }
        }

        return false;
    },
});
