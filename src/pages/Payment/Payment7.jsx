import { Link } from "react-router-dom";
import styled from "styled-components";
import payment7 from "../../assets/images/payment/payment7.png";

export default function Payment7() {
  return (
    <StyledContainer>
      <StyledImage src={payment7} alt="payment7" />

      <Link to="/payment8">
        <SelectButton>Select</SelectButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/payment6">
        <BackButton>Back button</BackButton>
      </Link>

      <NextButton>Next button</NextButton>
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

const SelectButton = styled.button`
  position: absolute;
  top: 689px;
  left: 155px;
  padding: 1.7rem 22.5rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 90px;
  left: 80px;
  padding: 1rem 8rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 220px;
  left: 155px;
  padding: 3.2rem 8.5rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 220px;
  right: 150px;
  padding: 3.2rem 8.6rem;
  background-color: transparent;
  /* opacity: 0; */
`;
