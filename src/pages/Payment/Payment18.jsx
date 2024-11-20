// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment18 from "../../assets/images/payment/payment18.png";

export default function Payment18() {
  return (
    <StyledContainer>
      <StyledImage src={payment18} alt="payment18" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment17">
        <BasisOfFeesButton></BasisOfFeesButton>
      </Link>

      <Link to="/payment19">
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
  bottom: 205px;
  right: 550px;
  padding: 4rem 12rem;
  opacity: 0;
  background: red;
`;

const BasisOfFeesButton = styled.button`
  position: absolute;
  top: 1880px;
  right: 155px;
  padding: 6rem 24rem;
  opacity: 0;
  background: red;
`;

const AssessmentButton = styled.button`
  position: absolute;
  top: 2105px;
  right: 155px;
  padding: 2.5rem 24rem;
  opacity: 0;
  background: blue;
`;
