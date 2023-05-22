import React, { useState } from "react";
import styled from "./RadioBox.module.css";

const RadioGroup = ({ value, name, handle }: { value: string; name: string; handle: any }) => {
    const handleOnChangeRadio = (e: React.ChangeEvent) => {
        const { target } = e;
        const value = (target as HTMLInputElement).value;
        handle(name, value);
    };

    return (
        <>
            <label className={`${styled.radioBox} ${value === "man" && styled.active}`}>
                남성
                <input type="radio" name="gender" value="man" onChange={handleOnChangeRadio} hidden />
            </label>
            <label className={`${styled.radioBox} ${value === "woman" && styled.active}`}>
                여성
                <input type="radio" name="gender" value="woman" onChange={handleOnChangeRadio} hidden />
            </label>
        </>
    );
};

export default RadioGroup;
