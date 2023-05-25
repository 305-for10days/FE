import styled, { css } from "styled-components";

export interface WorkOutItemProps {
    info: {
        id: number;
        title: string;
        times: number;
        set: number;
    };
    isActive?: boolean;
    isCancel?: boolean;
}

const WorkOutItem = ({ info, isActive, isCancel }: WorkOutItemProps) => {
    return (
        <WorkOutItemStyled $isActive={isActive || false} $isCancel={isCancel || false}>
            <img src="https://via.placeholder.com/119x84" alt="" />
            <div className="infoGroup">
                <div className="title">{info.title}</div>
                <p className="desc">30초 3세트</p>
            </div>
        </WorkOutItemStyled>
    );
};

interface WorkOutStyledProps {
    $isActive: boolean;
    $isCancel: boolean;
}

const WorkOutItemStyled = styled.div<WorkOutStyledProps>`
    /* cursor: pointer; */
    display: flex;
    gap: 32px;
    padding: 8px;
    width: 100%;
    height: 100px;
    border: none;
    border-radius: 8px;
    border: 1px solid #fafafa;
    background-color: #fafafa;

    & > img {
        border-radius: 8px;
    }

    & > .infoGroup {
        text-align: left;

        & > .title {
            padding: 14px 0 4px;
            font-size: 16px;
            font-weight: bold;
        }

        & > .desc {
            margin: 0;
            font-size: 12px;
        }
    }

    ${({ $isActive }) =>
        $isActive &&
        css`
            background-color: #ecf3fe;
            border-color: #3888ff;
        `}

    ${({ $isCancel }) =>
        $isCancel &&
        css`
            background-color: #feecec;
            border-color: #c11b1c;
        `}
`;

export default WorkOutItem;
