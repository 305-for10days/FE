import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SkeletonItem from "../constants/SkeletonItem";

interface RoutineItem {
    id?: number;
    goal?: string;
    isActive?: boolean;
    loading?: boolean;
}

const RoutineItem = ({ id, goal, loading = false }: RoutineItem) => {
    const navigate = useNavigate();

    const handleOnClickRoutineDetail = () => {
        navigate(`/routine/${id}`);
    };

    if (loading) {
        return <RoutineSkeletoneItem />;
    }

    return (
        <RoutineItemStyled onClick={handleOnClickRoutineDetail}>
            <div className="title">{goal}</div>
            {/* <p className="desc">회원님께 이 운동을 추천드립니다!</p> */}
        </RoutineItemStyled>
    );
};

const RoutineSkeletoneItem = () => {
    return (
        <RoutineItemStyled>
            <SkeletonItem />
        </RoutineItemStyled>
    );
};

interface RoutineProps {
    $isActive?: boolean;
}

const RoutineItemStyled = styled.div<RoutineProps>`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 10px;
    width: 100%;
    height: 80px;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 8px;

    & > .title {
        padding: 10px;
        height: 40px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 7px;
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

export default RoutineItem;
