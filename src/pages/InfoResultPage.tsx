import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoDisabledSelector } from "../recoil/selectors/useInfoDisableSelector";
import { useEffect } from "react";
import { fetchAddUserInfo } from "../api/UserAPI";
import { useInfoState } from "../recoil/atoms/useInfoState";
import { authLoginState } from "../recoil/selectors/authSelector";
import { InfoAddProps } from "../@types/UserType";

const InfoResultPage = () => {
    const navigate = useNavigate();
    const isUserInfoDisabled = useRecoilValue(userInfoDisabledSelector);
    const { bmi } = useRecoilValue<InfoAddProps>(useInfoState);
    const [authState, setAuthState] = useRecoilState(authLoginState);
    const infoDate = useRecoilValue(useInfoState);

    const hendleMainPage = async () => {
        const res = await fetchAddUserInfo(infoDate);

        if (String(res.data.toLowerCase()) === "ok") {
            setAuthState({ ...authState, isFirstLogin: false });
            localStorage.setItem("firstLogin", "false");
            navigate("/main");
        }
    };

    const reulstImage = (bmi: string) => {
        const num = Number(bmi);

        if (num < 18.5) {
            return "/images/Cola1.png";
        } else if (num < 23) {
            return "/images/Cola2.png";
        } else if (num < 25) {
            return "/images/Cola3.png";
        } else {
            return "/images/Cola4.png";
        }
    };

    useEffect(() => {
        if (isUserInfoDisabled) navigate("/info");
    }, []);

    return (
        <ContainerStyled>
            <ContentsBoxStyled>
                <BmiInfoBoxStyled>
                    회원님의 BMI는
                    <br />
                    <strong>{bmi}</strong> 이네요!
                </BmiInfoBoxStyled>
                <img src={reulstImage(bmi)} />
            </ContentsBoxStyled>

            <NextBtnBoxStyled>
                <Button color="#3888FF" textColor="#fff" size="full" onClick={hendleMainPage}>
                    다음으로 넘어가기
                </Button>
            </NextBtnBoxStyled>
        </ContainerStyled>
    );
};

export default InfoResultPage;

const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    height: 100vh;
    background-color: white;
`;

const ContentsBoxStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 70px;

    & > img {
        scale: 1.1;
        padding-bottom: 50px;
    }
`;

const BmiInfoBoxStyled = styled.div`
    flex: 1;
    padding-left: 13px;
    font-size: 26px;
    line-height: 28px;
    font-weight: bold;

    & > strong {
        color: #3888ff;
    }
`;

const NextBtnBoxStyled = styled.div`
    padding: 0 0 36px;
    width: 100%;
`;
