// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment14 from "../../assets/images/payment/payment14.png";

export default function Payment14() {
  return (
    <StyledContainer>
      <StyledImage src={payment14} alt="payment14" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment13">
        <RequestDetailsButton></RequestDetailsButton>
      </Link>

      <Link to="/payment15">
        <CourtDetailsButton></CourtDetailsButton>
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

const RequestDetailsButton = styled.button`
  position: absolute;
  top: 620px;
  right: 155px;
  padding: 5.7rem 24rem;
  opacity: 0;
  background: red;
`;

const CourtDetailsButton = styled.button`
  position: absolute;
  top: 830px;
  right: 155px;
  padding: 2.5rem 24rem;
  opacity: 0;
  background: blue;
`;
