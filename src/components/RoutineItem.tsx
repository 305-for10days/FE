import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

interface RoutineItem {
    info: {
        id: number;
        title: string;
    };
    isActive: boolean;
}

interface RoutineProps {
    $isActive: boolean;
}

const RoutineItemStyled = styled.div<RoutineProps>`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 8px;

    & > .title {
        font-size: 16px;
        font-weight: bold;
    }

    & > .desc {
        margin: 0;
        font-size: 12px;
    }

    ${({ $isActive }) =>
        $isActive &&
        css`
            background-color: #ecf3fe;
            border-color: #3888ff;
        `}
`;

const RoutineItem = ({ info, isActive }: RoutineItem) => {
    const navigate = useNavigate();

    const handleOnClickRoutineDetail = () => {
        navigate(`/routine/${info.id}`);
    };

    return (
        <RoutineItemStyled $isActive={isActive} onClick={handleOnClickRoutineDetail}>
            <div className="title">{info.title}</div>
            <p className="desc">회원님께 이 운동을 추천드립니다!</p>
        </RoutineItemStyled>
    );
};

export default RoutineItem;
