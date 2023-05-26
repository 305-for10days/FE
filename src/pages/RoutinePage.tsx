import RoutineItem from "../components/RoutineItem";
import styled from "styled-components";
import { useRoutines } from "../hooks/useRoutines";

const RoutinePage = () => {
    const { routines } = useRoutines();

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <h1 className="title">운동을 선택하세요</h1>
                <RoutineListBoxStyled>
                    {routines.length > 0
                        ? routines.map((info) => <RoutineItem id={info.id} goal={info.goal} key={info.id} />)
                        : new Array(5).fill("").map((_, idx) => <RoutineItem key={idx} loading={true} />)}
                </RoutineListBoxStyled>
            </ContentBoxStyled>
        </ContainerStyled>
    );
};

const ContainerStyled = styled.div`
    background: #fff;
    padding: 0 24px;
    height: 100vh;
    color: #000;
`;

const ContentBoxStyled = styled.div`
    padding-top: 20px;
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

export default RoutinePage;
