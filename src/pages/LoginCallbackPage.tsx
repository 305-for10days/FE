import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { authLoginState } from "../recoil/selectors/authSelector";
import { useRecoilState } from "recoil";
import { fetchUserProfileCheck } from "../api/UserAPI";

const LoginCallbackPage = () => {
    const [searchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");

    const [authState, setAuthState] = useRecoilState(authLoginState);

    useEffect(() => {
        (async () => {
            if (jwt) {
                localStorage.setItem("token", jwt);

                const res = await fetchUserProfileCheck();

                if (res) {
                    localStorage.setItem("first_login", res.data.hasProfile);
                    setAuthState({ ...authState, isLoggedIn: true, token: jwt, isFirstLogin: res.data.hasProfile });
                }
                location.href = "/main";
            } else {
                location.href = "/";
            }
        })();
    }, []);

    return <></>;
};

export default LoginCallbackPage;
