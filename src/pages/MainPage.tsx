import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import WorkOutRecordItem from "../components/WorkOutRecordItem";
import { WORKOUT_RECORD_DATAS } from "../constants/data";
import ProfileAvatar from "../components/ProfileAvatar";

const MainPage = () => {
    const navigate = useNavigate();

    const handleOnClickRoutine = () => {
        navigate("/routine");
    };

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <div className="titleGroup">
                    <h1 className="title">운동 내역</h1>
                    <ProfileAvatar />
                </div>
                <WorkOutRecordBoxStyled>
                    {WORKOUT_RECORD_DATAS.map((info) => (
                        <WorkOutRecordItem key={info.id} info={info} />
                    ))}
                </WorkOutRecordBoxStyled>
            </ContentBoxStyled>

            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" onClick={handleOnClickRoutine}>
                    운동하러 가기
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
    background: #fff;
`;

const ContentBoxStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 70px;

    & > .titleGroup {
        display: flex;
        align-items: center;

        & > .title {
            flex: 1;
            margin: 0;
            font-size: 24px;
        }
    }
`;

const WorkOutRecordBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 10px;
`;

const BtnBoxStyled = styled.div`
    padding: 20px 0 36px;
    width: 100%;
`;

export default MainPage;
