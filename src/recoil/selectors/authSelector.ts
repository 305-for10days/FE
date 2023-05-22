import { selector } from "recoil";
import { authState } from "../atoms/authState";

export const authSelector = selector({
    key: "id/authentification",
    get: ({ get }) => {
        const value = get(authState);
        return value;
    },
    // set: ({set}, newValue) =>
    //   set(
    //     tempFahrenheit,
    //     newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32,
    //   ),
});
