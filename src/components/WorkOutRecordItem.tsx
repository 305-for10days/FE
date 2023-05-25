import { styled } from "styled-components";

interface WorkOutRecordProps {
    info: {
        id: number;
        kcal: number;
        title: string;
        time: number;
        createDate: Date;
    };
}

const WorkOutRecordItem = ({ info }: WorkOutRecordProps) => {
    return (
        <WorkOutRecordStyled>
            <img src="https://via.placeholder.com/69x69" alt="" />
            <RecordInfoBoxStyled>
                <div>
                    <strong>{info.kcal}kcal</strong>를 소비한
                    <br />
                    <strong>{info.title}</strong> 운동 <strong>{info.time}분</strong>
                </div>
                <p>5월 20일</p>
            </RecordInfoBoxStyled>
        </WorkOutRecordStyled>
    );
};

const WorkOutRecordStyled = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5px;
    gap: 26px;
    height: 80px;
    border-radius: 8px;
    background-color: #fafafa;

    & > img {
        width: 69px;
        height: 69px;
        border-radius: 6px;
    }
`;

const RecordInfoBoxStyled = styled.div`
    & > div {
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;

        & strong {
            color: #3888ff;
        }
    }

    & > p {
        margin: 0;
        font-weight: 500;
        font-size: 12px;
    }
`;

export default WorkOutRecordItem;
