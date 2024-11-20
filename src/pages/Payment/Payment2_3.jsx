import { Link } from "react-router-dom";
import styled from "styled-components";
import payment2 from "../../assets/images/payment/payment2.png";

export default function Payment2_3() {
  return (
    <StyledContainer>
      <StyledImage src={payment2} alt="payment2" />

      <Link to="/payment3_3">
        <SelectButton>Select</SelectButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/payment1_6">
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
  top: 660px;
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
  bottom: 190px;
  left: 155px;
  padding: 3.5rem 8.5rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 190px;
  right: 150px;
  padding: 3.5rem 8.6rem;
  background-color: transparent;
  /* opacity: 0; */
`;
