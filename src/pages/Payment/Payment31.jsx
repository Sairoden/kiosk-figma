// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment11 from "../../assets/images/payment/payment11.png";

export default function Payment11() {
  return (
    <StyledContainer>
      <StyledImage src={payment11} alt="payment11" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment10">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment12">
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
  top: 60px;
  left: 80px;
  padding: 3rem 11rem;
  /* opacity: 0; */
  background: red;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 320px;
  right: 550px;
  padding: 4rem 12rem;
  /* opacity: 0; */
  background: red;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 320px;
  right: 120px;
  padding: 4rem 12rem;
  /* opacity: 0; */
  background: red;
`;
