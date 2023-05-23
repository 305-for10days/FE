import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    height: 100vh;
    background-color: white;
`;

const ContentsBoxStyled = styled.div`
    flex: 1;
    color: black;
    padding-top: 70px;
`;

const NextBtnBoxStyled = styled.div`
    padding: 0 0 36px;
    width: 100%;
`;

const InfoResultPage = () => {
    const navigate = useNavigate();

    const hendleMainPage = () => {
        navigate("/main");
    };

    return (
        <ContainerStyled>
            <ContentsBoxStyled>
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