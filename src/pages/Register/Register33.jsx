// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register33 from "../../assets/images/registration/register3-3.png";

export default function Register33() {
  return (
    <StyledContainer>
      <StyledImage src={register33} alt="Register 3" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register2">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register4-1">
        <FaceIDButton></FaceIDButton>
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

const FaceIDButton = styled.button`
  position: absolute;
  top: 1800px;
  left: 200px;
  padding: 18rem 23rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 30px;
  left: 60px;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 90px;
  left: 150px;
  padding: 5rem 13rem;
  opacity: 0;
`;
