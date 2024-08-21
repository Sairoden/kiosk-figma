// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register43 from "../../assets/images/registration/register4-3.png";

export default function Register43() {
  return (
    <StyledContainer>
      <StyledImage src={register43} alt="Register 4" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register3-3">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register5-1">
        <GovernmentIDButton></GovernmentIDButton>
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

const GovernmentIDButton = styled.button`
  position: absolute;
  top: 2700px;
  left: 150px;
  padding: 18rem 23rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 100px;
  left: 80px;
  padding: 5rem 13rem;
  opacity: 0;
`;
