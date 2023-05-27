import styled from "styled-components";
import Button from "../components/Button";
import { useWorkOuts } from "../hooks/useWorkOuts";
import WorkOutItem from "../components/WorkOutItem";
import ResultInfoBox from "../components/ResultInfoBox";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { workOutCompleteState } from "../recoil/atoms/workOutCompleteState";
import { useEffect } from "react";
import { useRoutines } from "../hooks/useRoutines";

const WorkOutSharePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const isWorkOutComplete = useRecoilValue(workOutCompleteState);
    const { getRoutineWorkOuts } = useRoutines();
    const { workOuts, setWorkOutsState } = useWorkOuts();

    useEffect(() => {
        if (!isWorkOutComplete.isCompletedIn) {
            navigate(`/routine/${id}`);
        } else {
            const data = getRoutineWorkOuts(Number(id));
            if (data) {
                setWorkOutsState(data);
            } else {
                navigate(`/routine/${id}`);
            }
        }
    }, []);

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <ResultInfoBox />
                <WorkOutListBoxStyled>
                    {workOuts.map((info) => (
                        <WorkOutItem key={info.workoutId} info={info} />
                    ))}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full">
                    공유하기
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
