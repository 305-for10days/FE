import { atom } from "recoil";

interface TokenUserProps {
    USER_ID?: number;
    USER_NICK?: string;
    USER_EAMIL?: string;
}

interface AuthentificationProps {
    user: TokenUserProps | any;
    isFirstLogin: boolean;
    isLoggedIn: boolean;
    token: string;
}

export const initialize: AuthentificationProps = {
    user: {},
    // isFirstLogin: false,
    isFirstLogin: localStorage.getItem("first_login") ? true : false,
    isLoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || "",
};

export const authState = atom<AuthentificationProps>({
    key: "authentification",
    default: initialize,
});
