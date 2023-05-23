import Timer from "../components/Timer";
import styled from "styled-components";

const ContainerStyled = styled.div`
    background: rgb(240, 239, 229);
    height: 100vh;
`;

const MainPage = () => {
    return (
        <ContainerStyled>
            <Timer />
        </ContainerStyled>
    );
};

export default MainPage;
