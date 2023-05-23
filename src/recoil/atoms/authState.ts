import { atom } from "recoil";

interface AuthentificationProps {
    email: string;
    isLogin: boolean;
}

export const initialize: AuthentificationProps = {
    email: localStorage.getItem("token") || "",
    isLogin: localStorage.getItem("token") ? true : false,
};

export const authState = atom<AuthentificationProps>({
    key: "authentification",
    default: initialize,
});
