import styled from "styled-components";
import Button from "../components/Button";

const LoginPage = () => {
    const handleKakaoLogin = async () => {
        location.href = "http://southoftheriver.synology.me:8082/oauth2/authorization/kakao";
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

const ContainerStyle = styled.div`
    position: relative;
    height: 100vh;
    /* background-color: var(--main-color); */
    background-color: #fff;
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

export default LoginPage;
