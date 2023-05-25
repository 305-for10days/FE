import styled from "styled-components";
import Button from "../components/Button";
import { useWorkOuts } from "../hooks/useWorkOuts";
import WorkOutItem from "../components/WorkOutItem";
import ResultInfoBox from "../components/ResultInfoBox";

const WorkOutSharePage = () => {
    // const id = location.pathname.split("/")[2];
    const { workOuts } = useWorkOuts();

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <ResultInfoBox />
                <WorkOutListBoxStyled>
                    {workOuts.map((info) => (
                        <WorkOutItem key={info.id} info={info} />
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
    padding: 70px 23px 0;
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
