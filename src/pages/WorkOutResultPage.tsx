import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import SwipeWorkOutBox from "../components/SwipeWorkOutBox";
import WorkOutChangeBox from "../components/WorkOutChangeBox";
import { useWorkOuts } from "../hooks/useWorkOuts";
import { workOutCompleteState } from "../recoil/atoms/workOutCompleteState";
import styled from "styled-components";
import { useRoutines } from "../hooks/useRoutines";

const WorkOutResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const isWorkOutComplete = useRecoilValue(workOutCompleteState);
    const [completes, setCompletes] = useState<number[]>([]);

    const { getRoutineWorkOuts } = useRoutines();
    const { workOuts, checked, setWorkOutsState, handleOnClickCheckWorkdOut } = useWorkOuts();

    const handleOnClickSharePage = () => {
        // 루틴완료 로직
        //
        navigate(`/result/${id}`);
    };

    const handleChangeComplete = (id: number) => {
        if (completes.includes(id)) {
            setCompletes((completes) => completes.filter((item) => item != id));
        } else {
            setCompletes((completes) => [...completes, id]);
        }
    };

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
                <div className="titleGroup">
                    <h1 className="title">오늘 운동 어땟나요?</h1>
                    <p>좌우로 스와이프</p>
                </div>
                <WorkOutListBoxStyled>
                    {workOuts.map((info) =>
                        checked.includes(info.workoutId) ? (
                            <WorkOutChangeBox key={info.workoutId} info={info} changeWork={() => handleOnClickCheckWorkdOut(info.workoutId)}></WorkOutChangeBox>
                        ) : (
                            <SwipeWorkOutBox
                                key={info.workoutId}
                                info={info}
                                isComplete={completes.includes(info.workoutId)}
                                isChecked={checked.includes(info.workoutId)}
                                changeComplete={() => handleChangeComplete(info.workoutId)}
                                changeWork={() => handleOnClickCheckWorkdOut(info.workoutId)}
                            />
                        )
                    )}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" isDisabled={completes.length !== workOuts.length} onClick={handleOnClickSharePage}>
                    다 했어요
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
    color: #000;
`;

const ContentBoxStyled = styled.div`
    flex: 1;
    padding-top: 20px;
    text-align: center;

    & > .titleGroup {
        display: flex;
        flex-direction: column;
        gap: 8px;

        & > .title {
            margin: 0;
            font-size: 24px;
            color: #3888ff;
        }

        & > p {
            margin: 0;
            font-size: 12px;
        }
    }
`;

const WorkOutListBoxStyled = styled.div`
    /* height: 100%; */
    display: flex;
    align-items: center;
    padding: 10px 0 26px;
    flex-direction: column;
    gap: 8px;
`;

const BtnBoxStyled = styled.div`
    padding: 20px 0 36px;
    width: 100%;
`;

export default WorkOutResultPage;
