// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment16 from "../../assets/images/payment/payment16.png";

export default function Payment16() {
  return (
    <StyledContainer>
      <StyledImage src={payment16} alt="payment16" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment15">
        <ServiceDetailsButton></ServiceDetailsButton>
      </Link>

      <Link to="/payment17">
        <PersonalInformationButton></PersonalInformationButton>
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
  bottom: 130px;
  right: 550px;
  padding: 4rem 12rem;
  opacity: 0;
  background: red;
`;

const ServiceDetailsButton = styled.button`
  position: absolute;
  top: 1120px;
  right: 155px;
  padding: 8.5rem 24rem;
  opacity: 0;
  background: red;
`;

const PersonalInformationButton = styled.button`
  position: absolute;
  top: 1430px;
  right: 155px;
  padding: 2.5rem 24rem;
  opacity: 0;
  background: blue;
`;
