import { selector } from "recoil";
import { authState } from "../atoms/authState";
import jwtDecode from "jwt-decode";

export const authLoginState = selector({
    key: "authentification/id",
    get: ({ get }) => {
        const value = get(authState);

        const token = localStorage.getItem("token");
        if (token) {
            jwtDecode(token);
            return { ...value, user: jwtDecode(token) };
        }

        return value;
    },
    set({ set }, newValue) {
        set(authState, newValue);
    },
});
