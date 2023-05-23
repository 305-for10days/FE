import { atom } from "recoil";

interface AuthentificationProps {
    email: string;
    isLogin: boolean;
}

export const initialize: AuthentificationProps = {
    email: "",
    isLogin: false,
};

export const authState = atom<AuthentificationProps>({
    key: "authentification",
    default: initialize,
});
