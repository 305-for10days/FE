import styled from "styled-components";
import Button from "../components/Button";
import WorkOutBox from "../components/WorkOutBox";
import { useWorkOuts } from "../hooks/useWorkOuts";

const WorkOutPage = () => {
    const { workOuts, handleOnClickCheckWorkdOut } = useWorkOuts(1);

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <h1 className="title">체지방 감소</h1>
                <WorkOutListBoxStyled>
                    {workOuts.map((info) => (
                        <WorkOutBox info={info} isActive={info.isActive} key={info.id} onClick={() => handleOnClickCheckWorkdOut(info.id)} />
                    ))}
                </WorkOutListBoxStyled>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" isDisabled={true}>
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
