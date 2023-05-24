import { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import InputBox from "../components/InputBox";
import RadioBox from "../components/RadioBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { InfoAddProps } from "../@types/UserType";
import { useInfoState } from "../recoil/atoms/useInfoState";
import { useRecoilState } from "recoil";

const InfoPage = () => {
    const navigate = useNavigate();
    const [infoData, setInfoDate] = useRecoilState<InfoAddProps>(useInfoState);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleOnChange = (name: string, value: number) => {
        setInfoDate({ ...infoData, [name]: value });
    };

    /*
     * BMI 계산
     */
    const calculateBmi = (weight: number, height: number) => {
        const bmi = weight / (height / 100) ** 2;
        return bmi.toFixed(1);
    };

    const handleNextPage = () => {
        const bmi = calculateBmi(Number(infoData.weight), Number(infoData.height));
        setInfoDate({ ...infoData, bmi: bmi });
        navigate("/info/result");
    };

    useEffect(() => {
        for (const key in infoData) {
            if (key === "bmi") {
                continue;
            }
            if (infoData[key] === 0 || !infoData[key]) {
                setIsDisabled(true);
                return;
            }
        }
        setIsDisabled(false);
    }, [infoData]);

    return (
        <ContainerStyled>
            <ContentBoxStyled>
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
                <InputGroup title="일주일에 운동을\n몇 번 얼마나 하시나요?">
                    <InputBox value={infoData.severalTimesWeek} name="severalTimesWeek" handle={handleOnChange}>
                        회/주
                    </InputBox>
                    <InputBox value={infoData.minutePerWorkout} name="minutePerWorkout" handle={handleOnChange}>
                        분/회
                    </InputBox>
                </InputGroup>
            </ContentBoxStyled>
            <BtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" isDisabled={isDisabled} onClick={handleNextPage}>
                    다음으로 넘어가기
                </Button>
            </BtnBoxStyled>
        </ContainerStyled>
    );
};

const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    height: 100vh;
    background-color: #fff;
`;

const ContentBoxStyled = styled.div`
    flex: 1;
`;

const BtnBoxStyled = styled.div`
    padding: 20px 0 36px;
    width: 100%;
`;

export default InfoPage;
