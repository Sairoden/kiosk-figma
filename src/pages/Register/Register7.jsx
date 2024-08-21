// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register7 from "../../assets/images/registration/register7.png";

export default function Register7() {
  return (
    <StyledContainer>
      <StyledImage src={register7} alt="Register 7" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/">
        <HomeButton></HomeButton>
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
  top: 20px;
  left: 20px;
  padding: 4rem 15rem;
  opacity: 0;
`;

const HomeButton = styled.button`
  position: absolute;
  bottom: 300px;
  left: 100px;
  padding: 5rem 25rem;
  opacity: 0;
`;
