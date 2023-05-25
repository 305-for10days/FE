import { selector } from "recoil";
import { authState } from "../atoms/authState";

export const authLoginState = selector({
    key: "authentification/id",
    get: ({ get }) => {
        const value = get(authState);

        // if (localStorage.getItem("token")) {
        //     const res = fetchUserProfileCheck();
        //     console.log(res);
        // }

        return value;
    },
    set({ set }, newValue) {
        set(authState, newValue);
    },
});
