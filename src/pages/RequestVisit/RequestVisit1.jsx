import { Link } from "react-router-dom";
import styled from "styled-components";
import visit1 from "../../assets/images/requestToVisit/visit1.png";

export default function RequestVisit1() {
  return (
    <StyledContainer>
      <StyledImage src={visit1} alt="visit1" />

      <Link to="/requestVisit8">
        <FingerButton>fingerprint</FingerButton>
      </Link>

      <Link to="/">
        <BackButton>Back button</BackButton>
      </Link>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
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

const FingerButton = styled.button`
  position: absolute;
  top: 850px;
  left: 200px;
  padding: 18rem 19rem;
  background: red;
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 120px;
  left: 80px;
  padding: 4rem 12rem;
  background: red;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 60px;
  left: 80px;
  padding: 4rem 12rem;
  background: red;
  /* opacity: 0; */
`;
