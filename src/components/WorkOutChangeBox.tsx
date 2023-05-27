import { styled } from "styled-components";
import WorkOutItem, { WorkOutItemProps } from "./WorkOutItem";
import Button from "./Button";
import { useEffect } from "react";
import { fetchWorkOutRecommend } from "../api/WorkOutAPI";

interface WorkOutChangeProps extends WorkOutItemProps {
    changeWork: any;
}

const WorkOutChangeBox = ({ info, changeWork }: WorkOutChangeProps) => {
    useEffect(() => {
        (async () => {
            const { workoutId, set, detail } = info;
            const res = await fetchWorkOutRecommend({ workoutId, calorie: detail?.calorie || 0, category: detail?.category || "", set: set });

            if (res) {
                console.log(res.data);
            }
        })();
    }, []);

    return (
        <WorkOutChangeBoxStyled>
            <ChangeBoxWrapperStyled>
                <WorkOutItem info={info} isCancel={true} />
                <img src="/icons/down-arrow.svg" alt="아래화살표" />
                <WorkOutItem info={info} isActive={true} />
                <div className="btnGroup">
                    <Button size="full" onClick={changeWork}>
                        그대로 두기
                    </Button>
                    <Button color="#3888FF" textColor="#fff" size="full">
                        바꾸기
                    </Button>
                </div>
            </ChangeBoxWrapperStyled>
        </WorkOutChangeBoxStyled>
    );
};

const WorkOutChangeBoxStyled = styled.div`
    padding: 0 10px;
    width: 100%;
`;

const ChangeBoxWrapperStyled = styled.div`
    padding: 10px 10px 16px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

    & > img {
        padding: 10px 0 16px 0;
    }

    & .btnGroup {
        display: flex;
        padding: 12px 10px;
        gap: 21px;
    }
`;

export default WorkOutChangeBox;
