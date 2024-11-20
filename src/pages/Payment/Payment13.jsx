// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment13 from "../../assets/images/payment/payment13.png";

export default function Payment13() {
  return (
    <StyledContainer>
      <StyledImage src={payment13} alt="payment13" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment14">
        <RequestDetailsButton></RequestDetailsButton>
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
  bottom: 315px;
  right: 580px;
  padding: 4rem 11rem;
  opacity: 0;
  background: red;
`;

const RequestDetailsButton = styled.button`
  position: absolute;
  top: 620px;
  right: 155px;
  padding: 2.5rem 24rem;
  opacity: 0;
  background: red;
`;
