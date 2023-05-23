import { useRecoilValue } from "recoil";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import InfoResultPage from "./pages/InfoResultPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { authLoginState } from "./recoil/selectors/authSelector";
import RoutinePage from "./pages/RoutinePage";
import RoutineDetailPage from "./pages/RoutineDetailPage";

function App() {
    const authState = useRecoilValue(authLoginState);

    useEffect(() => {
        console.log(authState);
    }, [authState]);

    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    {authState.isLogin ? (
                        <>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/main" element={<MainPage />} />
                            <Route path="/info" element={<InfoPage />} />
                            <Route path="/info/result" element={<InfoResultPage />} />
                            <Route path="/routine" element={<RoutinePage />} />
                            <Route path="/routine/:id" element={<RoutineDetailPage />} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<LoginPage />} />
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
