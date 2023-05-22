import React from "react";
import styled from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        navigate("/info");
    };

    return (
        <div className={styled.loginContainer}>
            <div className={styled.loginButtonContainer}>
                <button className={styled.kakaoButton} onClick={handleKakaoLogin}>
                    <img src={"/icons/kakaoicon.png"} alt="카카오 로고 이미지" />
                    카카오톡으로 로그인
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
