import styled from "styled-components";
import Button from "../components/Button";
import WorkOutItem from "../components/WorkOutItem";
import ResultInfoBox from "../components/ResultInfoBox";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { workOutCompleteState } from "../recoil/atoms/workOutCompleteState";
import { useEffect } from "react";

const WorkOutSharePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const workOutComplete = useRecoilValue(workOutCompleteState);

    useEffect(() => {
        if (!workOutComplete.isCompletedIn) {
            navigate(`/main`);
        }
    }, []);

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <ResultInfoBox resultId={Number(id)} />
                <WorkOutListBoxStyled>
                    {workOutComplete.workOuts.map((info) => (
                        <WorkOutItem key={info.workoutId} info={info} />
                    ))}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" onClick={() => navigate("/main")}>
                    홈으로
                </Button>
            </BtnBoxStyled>
        </ContainerStyled>
    );
};

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    height: 100vh;
    background-color: #fff;
`;

const ContentBoxStyled = styled.div`
    flex: 1;
    padding: 20px 23px 0;
    text-align: center;

    & > .title {
        margin: 0;
        font-size: 24px;
        color: #3888ff;
    }
`;

const WorkOutListBoxStyled = styled.div`
    display: flex;
    padding: 16px 0 26px;
    flex-direction: column;
    gap: 8px;
`;

const BtnBoxStyled = styled.div`
    padding: 20px 0 36px;
    width: 100%;
`;

export default WorkOutSharePage;
