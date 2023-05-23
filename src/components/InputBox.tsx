import { ReactNode } from "react";
import styled from "styled-components";

const InputBoxStyled = styled.div`
    display: flex;
    align-items: end;
    color: black;
    gap: 4px;

    & > input {
        flex: 1;
        width: 100%;
        height: 60px;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        background-color: #fafafa;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }

    & > span {
        display: inline-block;
        width: 36px;
        font-size: 16px;
        font-weight: bold;
        white-space: nowrap;
    }
`;

const InputBox = ({ value, name, handle, children }: { value?: number; name: string; handle: any; children: ReactNode }) => {
    const handleOnChange = (e: React.ChangeEvent) => {
        const { target } = e;
        const value = (target as HTMLInputElement).value;
        handle(name, value);
    };

    return (
        <InputBoxStyled>
            <input type="number" name={name} onChange={handleOnChange} value={Number(value) || ""} />
            <span>{children}</span>
        </InputBoxStyled>
    );
};

export default InputBox;
