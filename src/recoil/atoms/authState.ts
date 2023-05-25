import { atom } from "recoil";

interface AuthentificationProps {
    email: string;
    isFirstLogin: boolean;
    isLoggedIn: boolean;
    token: string;
}

export const initialize: AuthentificationProps = {
    email: localStorage.getItem("token") || "",
    isFirstLogin: !localStorage.getItem("firstLogin") ? true : false,
    isLoggedIn: localStorage.getItem("token") ? true : false,
    token: "",
};

export const authState = atom<AuthentificationProps>({
    key: "authentification",
    default: initialize,
});
