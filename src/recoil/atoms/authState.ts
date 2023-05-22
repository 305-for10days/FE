import { atom } from "recoil";

interface AuthentificationProps {
    email: string;
}

export const initialize: AuthentificationProps = {
    email: "",
};

export const authState = atom<AuthentificationProps>({
    key: "authentification",
    default: initialize,
});
