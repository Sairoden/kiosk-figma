// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register2 from "../../assets/images/registration/register2.png";

export default function Register2() {
  return (
    <StyledContainer>
      <StyledImage src={register2} alt="Register 2" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register1">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register3-1">
        <FingerPrintButton></FingerPrintButton>
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

const FingerPrintButton = styled.button`
  position: absolute;
  top: 900px;
  left: 200px;
  padding: 18rem 23rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 5rem;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 80px;
  left: 150px;
  padding: 5rem 13rem;
  opacity: 0;
`;
