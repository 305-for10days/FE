import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authLoginState } from "../recoil/selectors/authSelector";

const ContainerStyled = styled.div`
    background: #fff;
    padding: 0 24px;
    height: 100vh;
    color: #000;
`;

const ContentBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 70px;
    text-align: center;
`;

const MainPage = () => {
    const setAuthState = useSetRecoilState(authLoginState);
    const navigate = useNavigate();

    const handleOnClickRoutine = () => {
        navigate("/routine");
    };

    const handleOnClickLogout = () => {
        localStorage.removeItem("token");
        setAuthState({ email: "", isLogin: false });
        navigate("/");
    };

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" onClick={handleOnClickRoutine}>
                    루틴 추천
                </Button>
                <Button color="#FB5E5E" textColor="#fff" size="full" onClick={handleOnClickLogout}>
                    로그아웃 (임시)
                </Button>
            </ContentBoxStyled>
        </ContainerStyled>
    );
};

export default MainPage;
