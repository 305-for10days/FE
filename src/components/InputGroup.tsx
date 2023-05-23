import { ReactNode } from "react";
import styled from "styled-components";

const InputGroupStyled = styled.div`
    padding: 36px 0;

    & > h1 {
        margin: 0;
        padding-bottom: 36px;
        font-size: 24px;
        font-weight: bold;
        color: black;
    }

    & > div {
        display: flex;
        gap: 20px;
    }
`;

const InputGroup = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
        <InputGroupStyled>
            <h1>{title}</h1>
            <div className="">{children}</div>
        </InputGroupStyled>
    );
};

export default InputGroup;
