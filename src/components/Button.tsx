import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
    color?: string;
    textColor?: string;
    isDisabled?: boolean;
    size?: "sm" | "md" | "lg" | "full";
    onClick?: any;
    children: React.ReactNode;
}

interface ButtonStyledProps {
    $color?: string;
    $textColor?: string;
    $size: "sm" | "md" | "lg" | "full";
    disabled?: boolean;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
    transition: all 0.2s;

    border: ${({ $color }) => ($color ? "none" : "1px solid #D9D9D9")};
    background-color: ${({ $color }) => $color || "#FAFAFA"};
    color: ${({ $textColor }) => $textColor || "#000"};

    ${({ disabled }) =>
        disabled &&
        css`
            color: #d9d9d9;
            background-color: #fafafa;
            border: 1px solid #d9d9d9;
        `}

    &:hover {
        ${({ disabled }) => !disabled && "scale: 1.02"}
    }

    ${({ $size }) => {
        if ($size === "sm") {
            return css`
                padding: 12px;
                border-radius: 8px;
            `;
        } else if ($size === "md") {
            return css`
                padding: 14px;
                border-radius: 8px;
            `;
        } else if ($size === "lg") {
            return css`
                padding: 16px;
                border-radius: 8px;
            `;
        } else {
            return css`
                width: 100%;
                padding: 16px;
                border-radius: 8px;
            `;
        }
    }};
`;

/* ${({size}) => { */
/* if(size === "md") */
/* }} */

/* padding: 8px 10px; */

const Button = ({ size, color, textColor, isDisabled, onClick, children }: ButtonProps) => {
    return (
        <ButtonStyled $color={color} $textColor={textColor} $size={size ?? "md"} disabled={isDisabled} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
