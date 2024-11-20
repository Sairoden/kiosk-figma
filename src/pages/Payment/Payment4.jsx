import { Link } from "react-router-dom";
import styled from "styled-components";
import payment4 from "../../assets/images/payment/payment4.png";

export default function Payment4() {
  return (
    <StyledContainer>
      <StyledImage src={payment4} alt="payment4" />

      <Link to="/payment3">
        <SelectButton>Select</SelectButton>
      </Link>

      <Link to="/payment5">
        <CourtButton>Court</CourtButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/payment1_2">
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
  opacity: 0;
`;

const CourtButton = styled.button`
  position: absolute;
  top: 910px;
  left: 155px;
  padding: 1.7rem 22.5rem;
  background-color: transparent;
  opacity: 0;
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
  bottom: 170px;
  left: 155px;
  padding: 3.2rem 8.5rem;
  background-color: transparent;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 170px;
  right: 150px;
  padding: 3.2rem 8.6rem;
  background-color: transparent;
  opacity: 0;
`;
