import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { infoAddState } from "../recoil/atoms/infoAddState";
import InputGroup from "../components/InputGroup";
import InputBox from "../components/InputBox";
import RadioBox from "../components/RadioBox";
import styled from "styled-components";

const ContainerStyled = styled.div`
    position: relative;
    padding: 0 24px;
    height: 100vh;
    background-color: white;
`;

const NextBtnStyled = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 36px;
    left: 50%;
    width: 100%;
    max-width: 342px;
    margin: 0 auto;
    height: 60px;
    border: none;
    border-radius: 8px;
    background-color: #3888ff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    transform: translateX(-50%);
    transition: all 0.2s;
`;

const InfoPage = () => {
    const [infoData, setInfoData] = useRecoilState(infoAddState);

    const handleOnChange = (name: string, value: number) => {
        setInfoData({ ...infoData, [name]: value });
    };

    useEffect(() => {
        console.log(infoData);
    }, [infoData]);

    return (
        <ContainerStyled>
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

            <NextBtnStyled>다음으로 넘어가기</NextBtnStyled>
        </ContainerStyled>
    );
};

export default InfoPage;
