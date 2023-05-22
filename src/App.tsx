import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./App.css";
import InfoPage from "./pages/InfoPage";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div className="container">
                    {/* <div className="wrapper"> */}
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/info" element={<InfoPage />} />
                        <Route path="/main" element={<MainPage />} />
                    </Routes>
                    {/* </div> */}
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
