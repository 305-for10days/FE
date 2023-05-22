import styled from "./InfoPage.module.css";
import InputGroup from "../components/InputGroup";
import InputBox from "../components/InputBox";
import RadioBox from "../components/RadioBox";
import { useRecoilState } from "recoil";
import { infoAddState } from "../recoil/atoms/infoAddState";
import { useEffect } from "react";

const InfoPage = () => {
    const [infoData, setInfoData] = useRecoilState(infoAddState);

    const handleOnChange = (name: string, value: number) => {
        setInfoData({ ...infoData, [name]: value });
    };

    useEffect(() => {
        console.log(infoData);
    }, [infoData]);

    return (
        <div className={styled.infoContainer}>
            <InputGroup title="성별을 선택해주세요.">
                <RadioBox value={infoData.gender} name="gender" handle={handleOnChange} />
            </InputGroup>
            <InputGroup title="키와 몸무게를 입력해주세요.">
                <InputBox value={infoData.height} name="height" handle={handleOnChange}>
                    cm
                </InputBox>
                <InputBox value={infoData.weight} name="weight" handle={handleOnChange}>
                    kg
                </InputBox>
            </InputGroup>

            <button className={styled.nextBtn}>다음으로 넘어가기</button>
        </div>
    );
};

export default InfoPage;
