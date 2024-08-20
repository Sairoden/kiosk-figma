// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register6 from "../../assets/images/registration/register6.png";

export default function Register6() {
  return (
    <StyledContainer>
      <Img src={register6} alt="Register 6" />

      <Link to="/">
        <ReturnButton>ReturnButton</ReturnButton>
      </Link>

      <Link to="/register5-3">
        <PrevButton>PrevButton</PrevButton>
      </Link>

      <Link to="/register7">
        <NextButton>NextButton</NextButton>
      </Link>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 620px;
  left: 580px;
  padding: 5rem 11rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 30px;
  left: 60px;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 620px;
  left: 130px;
  padding: 5rem 11rem;
  opacity: 0;
`;
