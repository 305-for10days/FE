import styled, { css } from "styled-components";
import WorkOutItem, { WorkOutItemProps } from "./WorkOutItem";
import { WorkOutProps } from "../hooks/useWorkOuts";

interface WorkOutBoxStyledProps {
    $isActive?: boolean;
}

interface WorkOutBoxProps extends WorkOutItemProps {
    info: WorkOutProps;
    step: string;
    onClick: any;
}

const WorkOutBox = ({ info, isActive, step, onClick }: WorkOutBoxProps) => {
    return (
        <WorkOutBoxStyled $isActive={isActive}>
            {step === "start" && (
                <div className="checkBoxWrapper">
                    <div className="checkBox" onClick={onClick} />
                </div>
            )}
            <WorkOutItem info={info} key={info.id} isActive={isActive} />
        </WorkOutBoxStyled>
    );
};

const WorkOutBoxStyled = styled.div<WorkOutBoxStyledProps>`
    display: flex;
    align-items: center;
    gap: 8px;

    & .checkBox {
        cursor: pointer;
        position: relative;
        width: 36px;
        height: 36px;
        border: 1px solid #3888ff;
        background-color: #fff;
        border-radius: 8px;

        ${({ $isActive }) =>
            $isActive &&
            css`
                background-color: #3888ff;
                &::after {
                    content: "";
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    height: 10px;
                    width: 20px;
                    border-bottom: 4px solid #fff;
                    border-left: 4px solid #fff;
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            `}
    }
`;

export default WorkOutBox;
