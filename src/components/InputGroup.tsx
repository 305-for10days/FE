import React, { ReactNode } from "react";
import styled from "styled-components";

const InputGroupStyled = styled.div`
    padding: 36px 0;

    & > p {
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
            <Title text={title} />
            <div className="">{children}</div>
        </InputGroupStyled>
    );
};

const Title = ({ text }: { text: string }) => {
    return (
        <p>
            {text.split("\\n").map((str, idx) => (
                <React.Fragment key={idx}>
                    {str}
                    <br />
                </React.Fragment>
            ))}
        </p>
    );
};

export default InputGroup;
