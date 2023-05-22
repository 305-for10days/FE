import { ReactNode } from "react";
import styled from "./inputBox.module.css";

const InputBox = ({ value, name, handle, children }: { value?: number; name: string; handle: any; children: ReactNode }) => {
    const handleOnChange = (e: React.ChangeEvent) => {
        const { target } = e;
        const value = (target as HTMLInputElement).value;
        handle(name, value);
    };

    return (
        <div className={styled.inputBox}>
            <input type="number" name={name} onChange={handleOnChange} value={Number(value) || ""} />
            <span>{children}</span>
        </div>
    );
};

export default InputBox;
