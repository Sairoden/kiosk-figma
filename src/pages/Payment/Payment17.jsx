// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment17 from "../../assets/images/payment/payment17.png";

export default function Payment17() {
  return (
    <StyledContainer>
      <StyledImage src={payment17} alt="payment17" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment16">
        <PersonalInformationButton></PersonalInformationButton>
      </Link>

      <Link to="/payment18">
        <BasisOfFeesButton></BasisOfFeesButton>
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

const PersonalInformationButton = styled.button`
  position: absolute;
  top: 1430px;
  right: 155px;
  padding: 13rem 24rem;
  opacity: 0;
  background: red;
`;

const BasisOfFeesButton = styled.button`
  position: absolute;
  top: 1880px;
  right: 155px;
  padding: 2.5rem 24rem;
  opacity: 0;
  background: blue;
`;
