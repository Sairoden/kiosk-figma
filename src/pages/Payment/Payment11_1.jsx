import { Link } from "react-router-dom";
import styled from "styled-components";
import payment10 from "../../assets/images/payment/payment10.png";

export default function Payment11_1() {
  return (
    <StyledContainer>
      <StyledImage src={payment10} alt="payment10" />

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/payment10_1">
        <BackButton>Back button</BackButton>
      </Link>

      <Link to="/payment11">
        <NextButton>Next button</NextButton>
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
  top: 90px;
  left: 80px;
  padding: 1rem 8rem;
  background-color: transparent;
  opacity: 0;
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 110px;
  left: 155px;
  padding: 3.2rem 8.5rem;
  background-color: transparent;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 110px;
  right: 150px;
  padding: 3.2rem 8.6rem;
  background-color: transparent;
  opacity: 0;
`;
