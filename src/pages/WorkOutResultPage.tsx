import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import SwipeWorkOutBox from "../components/SwipeWorkOutBox";
import WorkOutChangeBox from "../components/WorkOutChangeBox";
import { useWorkOuts } from "../hooks/useWorkOuts";
import { workOutCompleteState } from "../recoil/atoms/workOutCompleteState";
import styled from "styled-components";

const WorkOutResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const isWorkOutComplete = useRecoilValue(workOutCompleteState);
    const { workOuts, checked, handleOnClickCheckWorkdOut } = useWorkOuts();
    const [completes, setCompletes] = useState<number[]>([]);

    const handleOnClickSharePage = () => {
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
                        checked.includes(info.id) ? (
                            <WorkOutChangeBox key={info.id} info={info} changeWork={() => handleOnClickCheckWorkdOut(info.id)}></WorkOutChangeBox>
                        ) : (
                            <SwipeWorkOutBox
                                key={info.id}
                                info={info}
                                isComplete={completes.includes(info.id)}
                                isChecked={checked.includes(info.id)}
                                changeComplete={() => handleChangeComplete(info.id)}
                                changeWork={() => handleOnClickCheckWorkdOut(info.id)}
                            />
                        )
                    )}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" isDisabled={completes.length !== 5} onClick={handleOnClickSharePage}>
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
    padding-top: 70px;
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
