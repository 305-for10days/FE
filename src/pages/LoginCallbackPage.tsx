import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authLoginState } from "../recoil/selectors/authSelector";
import { useSetRecoilState } from "recoil";

const LoginCallbackPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");

    const setAuthState = useSetRecoilState(authLoginState);

    useEffect(() => {
        if (jwt) {
            localStorage.setItem("token", jwt);
            setAuthState({ email: "123", isLogin: true });
            navigate("/info");
            console.log("jwt");
        } else {
            navigate("/");
            console.log("null");
        }
    }, []);

    return <></>;
};

export default LoginCallbackPage;
