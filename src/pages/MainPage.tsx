import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import WorkOutRecordItem from "../components/WorkOutRecordItem";
import ProfileAvatar from "../components/ProfileAvatar";
import { useEffect, useState } from "react";
import { fetchCompleteRoutine } from "../api/WorkOutAPI";
import { WorkOutRecordProps } from "../@types/RoutineType";

const MainPage = () => {
    const navigate = useNavigate();

    const [completedRoutines, setCompletedRoutines] = useState<WorkOutRecordProps[]>([]);

    const handleOnClickRoutine = () => {
        navigate("/routine");
    };

    useEffect(() => {
        (async () => {
            const res = await fetchCompleteRoutine();

            if (res) {
                setCompletedRoutines(res.data.routines);
            }
        })();
    }, []);

    return (
        <ContainerStyled>
            <ContentBoxStyled>
                <div className="titleGroup">
                    <h1 className="title">운동 내역</h1>
                    <ProfileAvatar />
                </div>
                <WorkOutRecordBoxStyled>
                    {completedRoutines.map((item) => (
                        <WorkOutRecordItem key={[...item.date].join("")} info={item} />
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
    padding-top: 20px;

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
