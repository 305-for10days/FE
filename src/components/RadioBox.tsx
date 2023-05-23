import styled, { css } from "styled-components";

interface RadioProps {
    $active: boolean;
}

const RadioBoxStyled = styled.label<RadioProps>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    max-width: 121px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    color: black;
    font-size: 16px;
    font-weight: bold;

    ${({ $active }) => $active && activeStyled}
`;

const activeStyled = css({
    backgroundColor: "#3888ff",
    borderColor: "#3888ff",
    color: "white",
});

const RadioGroup = ({ value, name, handle }: { value: string; name: string; handle: any }) => {
    const handleOnChangeRadio = (e: React.ChangeEvent) => {
        const { target } = e;
        const value = (target as HTMLInputElement).value;
        handle(name, value);
    };

    return (
        <>
            <RadioBoxStyled $active={value === "man"}>
                남성
                <input type="radio" name="gender" value="man" onChange={handleOnChangeRadio} hidden />
            </RadioBoxStyled>
            <RadioBoxStyled $active={value === "woman"}>
                여성
                <input type="radio" name="gender" value="woman" onChange={handleOnChangeRadio} hidden />
            </RadioBoxStyled>
        </>
    );
};

export default RadioGroup;
