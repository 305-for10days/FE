import RoutineItem from "../components/RoutineItem";
import styled from "styled-components";
import { ROUTINE_DATAS } from "../constants/data";

const ContainerStyled = styled.div`
    background: #fff;
    padding: 0 24px;
    height: 100vh;
    color: #000;
`;

const ContentBoxStyled = styled.div`
    padding-top: 70px;
    text-align: center;

    & > .title {
        margin: 0;
        font-size: 24px;
    }
`;

const RoutineListBoxStyled = styled.div`
    display: flex;
    padding: 29px 0 26px;
    flex-direction: column;
    gap: 16px;
`;

const RoutinePage = () => {
    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <h1 className="title">운동을 선택하세요</h1>
                <RoutineListBoxStyled>
                    {ROUTINE_DATAS.map((info) => (
                        <RoutineItem info={info} isActive={info.id === 1} key={info.id} />
                    ))}
                </RoutineListBoxStyled>
            </ContentBoxStyled>
        </ContainerStyled>
    );
};

export default RoutinePage;
