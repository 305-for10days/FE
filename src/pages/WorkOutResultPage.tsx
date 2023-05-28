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
import { fetchCompleteWorkOut, fetchNewRoutineSave } from "../api/WorkOutAPI";
import { WorkoutSaveProps } from "../@types/WorkOutType";

const WorkOutResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const workOutComplete = useRecoilValue(workOutCompleteState);
    const [completes, setCompletes] = useState<number[]>([]);
    const { getRoutineWorkOuts } = useRoutines();
    const { workOuts, checked, setWorkOutsState, handleOnClickCheckWorkdOut, isChange } = useWorkOuts();
    const data = getRoutineWorkOuts(Number(id));

    const completeRoutine = async () => {
        const details: WorkoutSaveProps[] = workOuts.map((item) => {
            const completdSet = workOutComplete.workOuts.find((el) => item.workoutId === el.workoutId)?.isActive ? Number(item.set) : 0;

            return {
                workoutId: Number(item.workoutId),
                set: Number(item.set),
                completedSet: completdSet,
                calorie: Number(item.detail?.calorie),
            };
        });

        const res = await fetchCompleteWorkOut({
            id: Number(id),
            goal: String(data?.goal),
            details: details,
        });
        return res;
    };

    const newRoutineSave = async () => {
        const details: WorkoutSaveProps[] = workOuts.map((item) => {
            return {
                workoutId: Number(item.workoutId),
                set: Number(item.set),
                completedSet: 0,
                calorie: Number(item.detail?.calorie),
            };
        });
        const res = await fetchNewRoutineSave({
            goal: String(data?.goal),
            details: details,
        });
        return res;
    };

    const handleOnClickSharePage = async () => {
        // 루틴완료 로직
        const res = await completeRoutine();

        // 루틴 운동 변경 로직
        if (isChange) {
            const resp = await newRoutineSave();
            if (!resp) return;
        }

        if (res) {
            navigate(`/result/${Number(res.data?.id)}`);
        }
    };

    const handleChangeComplete = (id: number) => {
        if (completes.includes(id)) {
            setCompletes((completes) => completes.filter((item) => item != id));
        } else {
            setCompletes((completes) => [...completes, id]);
        }
    };

    useEffect(() => {
        if (!workOutComplete.isCompletedIn) {
            navigate(`/routine/${id}`);
        } else {
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
