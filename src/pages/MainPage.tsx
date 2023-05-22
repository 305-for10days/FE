import React from "react";
import Timer from "../components/Timer";
import styled from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div className={styled.main}>
            <div className={styled.timerContainer}>
                <Timer />
            </div>
        </div>
    );
};

export default MainPage;
