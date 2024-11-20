import { Link } from "react-router-dom";
import styled from "styled-components";
import payment12 from "../../assets/images/payment/payment12.png";

export default function Payment12() {
  return (
    <StyledContainer>
      <StyledImage src={payment12} alt="payment12" />

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/payment11">
        <BackButton>Back button</BackButton>
      </Link>

      <Link to="/payment13">
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
  bottom: 380px;
  left: 145px;
  padding: 3.2rem 8.5rem;
  background-color: transparent;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 380px;
  right: 150px;
  padding: 3.2rem 8.6rem;
  background-color: transparent;
  opacity: 0;
`;
