import { ReactNode } from "react";
import styled from "./InputGroup.module.css";

const InputGroup = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
        <div className={styled.inputGroup}>
            <h1>{title}</h1>
            <div className="">{children}</div>
        </div>
    );
};

export default InputGroup;
