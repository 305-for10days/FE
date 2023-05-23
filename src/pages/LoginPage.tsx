import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { useSetRecoilState } from "recoil";
import { authLoginState } from "../recoil/selectors/authSelector";

const ContainerStyle = styled.div`
    position: relative;
    height: 100vh;
    background-color: var(--main-color);
`;

const LogoImageBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ButtonGroupStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 36px;
    padding: 0 24px;
    width: 100%;
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const setAuthState = useSetRecoilState(authLoginState);

    const handleKakaoLogin = () => {
        setAuthState({ email: "123", isLogin: true });
        navigate("/info");
    };

    return (
        <ContainerStyle>
            <LogoImageBox>
                <img src="/logo.svg" />
            </LogoImageBox>

            <ButtonGroupStyled>
                <Button color="#ffe144" size="full" onClick={handleKakaoLogin}>
                    <img src={"/icons/kakaoicon.png"} alt="카카오 로고 이미지" width={26} />
                    카카오톡으로 로그인
                </Button>
            </ButtonGroupStyled>
        </ContainerStyle>
    );
};

export default LoginPage;
