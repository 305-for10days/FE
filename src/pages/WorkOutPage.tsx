import styled from "styled-components";
import Button from "../components/Button";
import WorkOutBox from "../components/WorkOutBox";
import { useWorkOuts } from "../hooks/useWorkOuts";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import { useSetRecoilState } from "recoil";
import { workOutCompleteState } from "../recoil/atoms/workOutCompleteState";
import { useRoutines } from "../hooks/useRoutines";

interface StepProps {
    value: "workout" | "start";
}

const WorkOutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split("/")[2];
    const setIsWorkOutComplete = useSetRecoilState(workOutCompleteState);
    const [step, setStep] = useState<StepProps>({ value: "workout" });
    const { getRoutineWorkOuts } = useRoutines();
    const { workOuts, checked, setWorkOutsState, handleOnClickCheckWorkdOut } = useWorkOuts();
    const data = getRoutineWorkOuts(Number(id));

    const totalCalorie = () => {
        return workOuts.reduce((prev, cur) => {
            if (cur.isActive) {
                return prev + Number(cur.detail?.calorie) * cur.set;
            }
            return prev;
        }, 0);
    };

    const handleOnClickSucess = () => {
        if (step.value === "workout") {
            setStep({ value: "start" });
            return;
        }

        if (step.value === "start") {
            const calorie = totalCalorie();
            const completeWorkOuts = workOuts.filter((item) => item.isActive);

            setIsWorkOutComplete({ isCompletedIn: true, calorie: calorie, workOuts: completeWorkOuts });
            navigate(`/routine/${id}/result`);
        }
    };

    useEffect(() => {
        if (data) {
            setWorkOutsState(data);
        } else {
            navigate("/routine");
        }
    }, []);

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <h1 className="title">체지방 감소</h1>
                <WorkOutListBoxStyled>
                    {workOuts.map((info) => (
                        <WorkOutBox
                            info={info}
                            step={step.value}
                            isActive={step.value !== "workout" && info.isActive}
                            key={info.workoutId}
                            onClick={() => handleOnClickCheckWorkdOut(info.workoutId)}
                        />
                    ))}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            {step.value === "start" && <Timer />}
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" isDisabled={step.value !== "workout" && checked.length === 0} onClick={handleOnClickSucess}>
                    {step.value === "workout" ? "운동 시작" : "다 했어요"}
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

    & > .title {
        margin: 0;
        font-size: 24px;
        color: #3888ff;
    }
`;

const WorkOutListBoxStyled = styled.div`
    /* height: 100%; */
    display: flex;
    padding: 36px 0 26px;
    flex-direction: column;
    gap: 8px;
`;

const BtnBoxStyled = styled.div`
    padding: 20px 0 36px;
    width: 100%;
`;

export default WorkOutPage;
