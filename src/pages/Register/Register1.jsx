// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register1 from "../../assets/images/registration/register1.png";

export default function Register1() {
  return (
    <StyledContainer>
      <StyledImage src={register1} alt="Register 1" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register2">
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

const ReturnButton = styled.button`
  position: absolute;
  top: 70px;
  left: 80px;
  padding: 2rem 10rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 150px;
  right: 580px;
  padding: 5rem 11rem;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 150px;
  right: 150px;
  padding: 5rem 11rem;
  opacity: 0;
`;
