import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { authLoginState } from "../recoil/selectors/authSelector";
import { useRecoilState } from "recoil";

const LoginCallbackPage = () => {
    // const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");

    const [authState, setAuthState] = useRecoilState(authLoginState);

    useEffect(() => {
        if (jwt) {
            localStorage.setItem("token", jwt);
            setAuthState({ ...authState, isLoggedIn: true, token: jwt });
            location.href = "/main";
        } else {
            location.href = "/";
        }
    }, []);

    return <></>;
};

export default LoginCallbackPage;
