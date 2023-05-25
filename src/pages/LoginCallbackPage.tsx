import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authLoginState } from "../recoil/selectors/authSelector";
import { useRecoilState } from "recoil";

const LoginCallbackPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");

    const [authState, setAuthState] = useRecoilState(authLoginState);

    useEffect(() => {
        if (jwt) {
            localStorage.setItem("token", jwt);
            setAuthState({ ...authState, email: jwt, isLogin: true });
            navigate("/main");
        } else {
            navigate("/");
        }
    }, []);

    return <></>;
};

export default LoginCallbackPage;
