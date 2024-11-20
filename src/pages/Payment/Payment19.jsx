// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment19 from "../../assets/images/payment/payment19.png";

export default function Payment19() {
  return (
    <StyledContainer>
      <StyledImage src={payment19} alt="payment19" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment20">
        <NextButton></NextButton>
      </Link>

      <Link to="/payment18">
        <AssessmentButton></AssessmentButton>
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
  opacity: 0;
  background: red;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 150px;
  right: 550px;
  padding: 4rem 12rem;
  opacity: 0;
  background: red;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 150px;
  right: 120px;
  padding: 4rem 12rem;
  opacity: 0;
  background: red;
`;

const AssessmentButton = styled.button`
  position: absolute;
  top: 2110px;
  right: 155px;
  padding: 12rem 24rem;
  opacity: 0;
  background: red;
`;
