import { styled } from "styled-components";
import { EMOJI_DATAS } from "../helpers/data";
import { WorkOutRecordProps } from "../@types/RoutineType";
import { formatDate } from "../helpers/DateUtile";

const WorkOutRecordItem = ({ info }: { info: WorkOutRecordProps }) => {
    const imageSrc = EMOJI_DATAS.find((item) => item.id === (info.emojiId || 1))?.src;
    const { date } = info;
    const newDate = new Date(date[0], date[1], date[2], date[3], date[4], date[5], date[6]);

    /**
     * Date locale ko가 적용되지 않음
     * 총 시간 체크하는 부분 필요
     */
    return (
        <WorkOutRecordStyled>
            <img src={imageSrc} alt="" />
            <RecordInfoBoxStyled>
                <div>
                    <strong>{info.calories}kcal</strong>를 소비한
                    <br />
                    <strong>{info.goal}</strong> 운동
                    {/* <strong>{info.time}분</strong> */}
                </div>
                <p>{formatDate(newDate)}</p>
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
