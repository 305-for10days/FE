import { useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import InfoResultPage from "./pages/InfoResultPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { authLoginState } from "./recoil/selectors/authSelector";
import RoutinePage from "./pages/RoutinePage";
import WorkOutPage from "./pages/WorkOutPage";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import WorkOutResultPage from "./pages/WorkOutResultPage";
import WorkOutSharePage from "./pages/WorkOutSharePage";
import { workOutState } from "./recoil/atoms/workOutState";
import { fetchWorkOutsList } from "./api/WorkOutAPI";

function App() {
    const authState = useRecoilValue(authLoginState);
    const setWorkOutInfoState = useSetRecoilState(workOutState);

    useEffect(() => {
        (async () => {
            if (authState.isLoggedIn) {
                const res = await fetchWorkOutsList();
                console.log(res?.data);
                if (res?.status === 200) setWorkOutInfoState(res.data);
            }
        })();
    }, [authState]);

    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    {authState.isLoggedIn ? (
                        <>
                            {authState.isFirstLogin ? (
                                <>
                                    <Route path="/" element={<InfoPage />} />
                                    <Route path="/info" element={<InfoPage />} />
                                    <Route path="/info/result" element={<InfoResultPage />} />
                                </>
                            ) : (
                                <>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="/main" element={<MainPage />} />
                                    <Route path="/routine" element={<RoutinePage />} />
                                    <Route path="/routine/:id" element={<WorkOutPage />} />
                                    <Route path="/routine/:id/result" element={<WorkOutResultPage />} />
                                    <Route path="/result/:id" element={<WorkOutSharePage />} />
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/login/callback" element={<LoginCallbackPage />} />
                        </>
                    )}
                    <Route path="*" element={<RedirectComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const RedirectComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, []);

    return <></>;
};

export default App;
