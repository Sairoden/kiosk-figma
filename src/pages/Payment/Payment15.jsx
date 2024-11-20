// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment15 from "../../assets/images/payment/payment15.png";

export default function Payment15() {
  return (
    <StyledContainer>
      <StyledImage src={payment15} alt="payment15" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment12">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/payment14">
        <CourtDetailsButton></CourtDetailsButton>
      </Link>

      <Link to="/payment16">
        <ServiceDetailsButton></ServiceDetailsButton>
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
  bottom: 150px;
  right: 550px;
  padding: 4rem 12rem;
  opacity: 0;
  background: red;
`;

const CourtDetailsButton = styled.button`
  position: absolute;
  top: 830px;
  right: 155px;
  padding: 8rem 24rem;
  opacity: 0;
  background: red;
`;

const ServiceDetailsButton = styled.button`
  position: absolute;
  top: 1120px;
  right: 155px;
  padding: 2.5rem 24rem;
  opacity: 0;
  background: blue;
`;
