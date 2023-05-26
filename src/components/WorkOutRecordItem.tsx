import { styled } from "styled-components";
import { EMOJI_DATAS } from "../constants/data";

interface WorkOutRecordProps {
    info: {
        id: number;
        kcal: number;
        title: string;
        time: number;
        image: number;
        createDate: Date;
    };
}

const WorkOutRecordItem = ({ info }: WorkOutRecordProps) => {
    const imageSrc = EMOJI_DATAS.find((item) => item.id === (info.image || 1))?.src;

    return (
        <WorkOutRecordStyled>
            <img src={imageSrc} alt="" />
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
