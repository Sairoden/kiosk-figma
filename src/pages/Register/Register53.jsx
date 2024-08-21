// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register53 from "../../assets/images/registration/register5-3.png";

export default function Register53() {
  return (
    <StyledContainer>
      <StyledImage src={register53} alt="Register 5" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register5-1">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register6">
        <NextButton></NextButton>
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

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  z-index: -1;
  box-sizing: border-box;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 100px;
  right: 80px;
  padding: 5rem 13rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 20px;
  left: 30px;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 100px;
  left: 100px;
  padding: 5rem 13rem;
  opacity: 0;
`;
