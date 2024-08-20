// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register7 from "../../assets/images/registration/register7.png";

export default function Register7() {
  return (
    <StyledContainer>
      <Img src={register7} alt="Register 7" />

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

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 5rem;
  padding: 4rem 15rem;
  opacity: 0;
`;

const HomeButton = styled.button`
  position: absolute;
  bottom: -20rem;
  left: 10rem;
  padding: 5rem 25rem;
  opacity: 0;
`;
