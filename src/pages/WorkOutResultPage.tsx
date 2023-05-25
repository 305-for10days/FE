import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTINE_WORKOUT_DATES } from "../constants/data";
import Button from "../components/Button";
import SwipeWorkOutBox from "../components/SwipeWorkOutBox";

const WorkOutResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const handleOnClickWorkOutPage = () => {
        navigate(`/routine/${id}/workout`);
    };

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <div className="titleGroup">
                    <h1 className="title">오늘 운동 어땟나요?</h1>
                    <p>좌우로 스와이프</p>
                </div>
                <WorkOutListBoxStyled>
                    {ROUTINE_WORKOUT_DATES.map((info) => (
                        <SwipeWorkOutBox key={info.id} info={info} />
                    ))}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" isDisabled={true} onClick={handleOnClickWorkOutPage}>
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
