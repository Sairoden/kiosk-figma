import { Link } from "react-router-dom";
import styled from "styled-components";
import payment10_1 from "../../assets/images/payment/payment10.1.png";

export default function Payment10() {
  return (
    <StyledContainer>
      <StyledImage src={payment10_1} alt="payment10.1" />

      <Link to="/payment8">
        <SelectButton>Select</SelectButton>
      </Link>

      <Link to="/payment9">
        <CaseButton>Case</CaseButton>
      </Link>

      <Link to="/payment10_1">
        <CaseTypeButton>Case Type</CaseTypeButton>
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

const CaseButton = styled.button`
  position: absolute;
  top: 910px;
  left: 155px;
  padding: 1.7rem 22.5rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const CaseTypeButton = styled.button`
  position: absolute;
  top: 1000px;
  left: 155px;
  padding: 12rem 21.5rem;
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
  bottom: 120px;
  left: 155px;
  padding: 3.2rem 8.5rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 120px;
  right: 150px;
  padding: 3.2rem 8.6rem;
  background-color: transparent;
  /* opacity: 0; */
`;
