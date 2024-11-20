import { Link } from "react-router-dom";
import styled from "styled-components";
import payment1 from "../../assets/images/payment/payment1.png";

export default function Payment1() {
  return (
    <StyledContainer>
      <StyledImage src={payment1} alt="payment1" />

      <Link to="/">
        <BackButton>Cancel button</BackButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
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

const BackButton = styled.button`
  position: absolute;
  bottom: 120px;
  left: 80px;
  padding: 4rem 4rem;
  /* opacity: 0; */
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 90px;
  left: 80px;
  padding: 1rem 8rem;
  /* opacity: 0; */
`;
