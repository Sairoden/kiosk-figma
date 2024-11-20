import { Link } from "react-router-dom";
import styled from "styled-components";
import payment1_2 from "../../assets/images/payment/payment1.2.png";

export default function Payment1_2() {
  return (
    // File case + Individual
    <StyledContainer>
      <StyledImage src={payment1_2} alt="payment1.2" />

      <Link to="/payment1_2">
        <FileButton>File Case</FileButton>
      </Link>

      <Link to="/payment1_5">
        <FilingButton>Filing</FilingButton>
      </Link>

      <Link to="/payment1_8">
        <OtherButton>Other</OtherButton>
      </Link>

      <Link to="/payment1_2">
        <IndividualButton>Individual</IndividualButton>
      </Link>

      <Link to="/payment1_3">
        <JuridicialButton>Juridicial</JuridicialButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/">
        <BackButton>Cancel button</BackButton>
      </Link>

      <Link to="/payment2">
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

const FileButton = styled.button`
  position: absolute;
  top: 665px;
  left: 155px;
  padding: 2.5rem 7.8rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const FilingButton = styled.button`
  position: absolute;
  top: 665px;
  left: 477px;
  padding: 2.5rem 7.5rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const OtherButton = styled.button`
  position: absolute;
  top: 665px;
  left: 765px;
  padding: 2.5rem 3.9rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const IndividualButton = styled.button`
  position: absolute;
  top: 905px;
  left: 155px;
  padding: 2.5rem 2.7rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const JuridicialButton = styled.button`
  position: absolute;
  top: 905px;
  left: 310px;
  padding: 2.5rem 2.85rem;
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
  bottom: 370px;
  left: 155px;
  padding: 3.5rem 8rem;
  background-color: transparent;
  /* opacity: 0; */
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 370px;
  right: 150px;
  padding: 3.5rem 8.6rem;
  background-color: transparent;
  /* opacity: 0; */
`;