import { atom } from "recoil";

interface AuthentificationProps {
    email: string;
    isFirstLogin: boolean;
    isLogin: boolean;
}

export const initialize: AuthentificationProps = {
    email: localStorage.getItem("token") || "",
    isFirstLogin: !localStorage.getItem("firstLogin") ? true : false,
    isLogin: localStorage.getItem("token") ? true : false,
};

export const authState = atom<AuthentificationProps>({
    key: "authentification",
    default: initialize,
});
