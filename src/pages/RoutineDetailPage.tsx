import styled from "styled-components";
import { ROUTINE_WORKOUT_DATES } from "../constants/data";
import WorkOutItem from "../components/WorkOutItem";
import Button from "../components/Button";

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

const RoutineDetailPage = () => {
    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <h1 className="title">체지방 감소</h1>
                <WorkOutListBoxStyled>
                    {ROUTINE_WORKOUT_DATES.map((info) => (
                        <WorkOutItem info={info} key={info.id} />
                    ))}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full">
                    운동 시작
                </Button>
            </BtnBoxStyled>
        </ContainerStyled>
    );
};

export default RoutineDetailPage;
