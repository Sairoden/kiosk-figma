import { Link } from "react-router-dom";
import styled from "styled-components";
import payment1_11 from "../../assets/images/payment/payment1.11.png";

export default function Payment1_11() {
  return (
    // Juridicial
    <StyledContainer>
      <StyledImage src={payment1_11} alt="payment1.11" />

      <Link to="/payment1_3">
        <FileButton>File Case</FileButton>
      </Link>

      <Link to="/payment1_6">
        <FilingButton>Filing</FilingButton>
      </Link>

      <Link to="/payment1_9">
        <OtherButton>Other</OtherButton>
      </Link>

      <Link to="/payment1_10">
        <IndividualButton>Individual</IndividualButton>
      </Link>

      <Link to="/payment1_11">
        <JuridicialButton>Juridicial</JuridicialButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/">
        <BackButton>Cancel button</BackButton>
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

const FileButton = styled.button`
  position: absolute;
  top: 665px;
  left: 155px;
  padding: 2.5rem 7.8rem;
  background-color: transparent;
  opacity: 0;
`;

const FilingButton = styled.button`
  position: absolute;
  top: 665px;
  left: 477px;
  padding: 2.5rem 7.5rem;
  background-color: transparent;
  opacity: 0;
`;

const OtherButton = styled.button`
  position: absolute;
  top: 665px;
  left: 765px;
  padding: 2.5rem 3.9rem;
  background-color: transparent;
  opacity: 0;
`;

const IndividualButton = styled.button`
  position: absolute;
  top: 905px;
  left: 155px;
  padding: 2.5rem 2.7rem;
  background-color: transparent;
  opacity: 0;
`;

const JuridicialButton = styled.button`
  position: absolute;
  top: 905px;
  left: 310px;
  padding: 2.5rem 2.85rem;
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
  bottom: 370px;
  left: 155px;
  padding: 3.5rem 8rem;
  background-color: transparent;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 370px;
  right: 150px;
  padding: 3.5rem 8.6rem;
  background-color: transparent;
  opacity: 0;
`;
