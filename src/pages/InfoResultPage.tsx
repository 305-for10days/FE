import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ContainerStyled = styled.div`
    position: relative;
    padding: 0 24px;
    height: 100vh;
    background-color: white;
`;

const ContentsBoxStyled = styled.div`
    color: black;
`;

const NextBtnBoxStyled = styled.div`
    position: absolute;
    padding: 0 24px;
    left: 0;
    width: 100%;
    bottom: 36px;
`;

const InfoResultPage = () => {
    const navigate = useNavigate();

    const hendleMainPage = () => {
        navigate("/main");
    };

    return (
        <ContainerStyled>
            <ContentsBoxStyled>
                <div>회원님의 체형은 통통형 이네요!</div>
                <img src="/images/result.png" />
            </ContentsBoxStyled>

            <NextBtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" onClick={hendleMainPage}>
                    다음으로 넘어가기
                </Button>
            </NextBtnBoxStyled>
        </ContainerStyled>
    );
};

export default InfoResultPage;
