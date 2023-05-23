import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContainerStyle = styled.div`
    position: relative;
    height: 100vh;
    background-color: var(--main-color);
`;

const ButtonGroupStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 36px;
    width: 100%;

    & .kakaoButton {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 342px;
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 8px;
        background-color: #ffe144;
        font-size: 16px;
        transition: all 0.2s;
        white-space: nowrap;

        &:hover {
            scale: 1.02;
        }

        & > img {
            width: 30px;
        }
    }
`;

const LoginPage = () => {
    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        navigate("/info");
    };

    return (
        <ContainerStyle>
            <ButtonGroupStyled>
                <button className="kakaoButton" onClick={handleKakaoLogin}>
                    <img src={"/icons/kakaoicon.png"} alt="카카오 로고 이미지" />
                    카카오톡으로 로그인
                </button>
            </ButtonGroupStyled>
        </ContainerStyle>
    );
};

export default LoginPage;
