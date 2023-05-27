import styled, { css } from "styled-components";
import { WorkOutProps } from "../hooks/useWorkOuts";
import { WORKOUT_IMAGES, WorkOutTypes } from "../helpers/data";

export interface WorkOutItemProps {
    info: WorkOutProps;
    isActive?: boolean;
    isCancel?: boolean;
}

const WorkOutItem = ({ info, isActive, isCancel }: WorkOutItemProps) => {
    const formatWorkOutDesc = (data: WorkOutProps) => {
        if (data.detail) {
            const fnc = WorkOutTypes[data.detail?.type];
            if (fnc) {
                const desc = fnc({ ...data.detail, set: info.set });
                return desc;
            }
        }
    };

    return (
        <WorkOutItemStyled $isActive={isActive || false} $isCancel={isCancel || false}>
            <img src={String(WORKOUT_IMAGES.find((item) => item.id === info.workoutId)?.src) || "/logo.svg"} alt={String(WORKOUT_IMAGES.find((item) => item.id === info.workoutId)?.name)} />
            <div className="infoGroup">
                <div className="title">{info.detail?.name}</div>
                <p className="desc">{formatWorkOutDesc(info)}</p>
            </div>
        </WorkOutItemStyled>
    );
};

interface WorkOutStyledProps {
    $isActive: boolean;
    $isCancel: boolean;
}

const WorkOutItemStyled = styled.div<WorkOutStyledProps>`
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
        max-width: 117px;
        -webkit-user-drag: none;
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
