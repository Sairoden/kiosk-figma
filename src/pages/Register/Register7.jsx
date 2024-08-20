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
        <ReturnButton>ReturnButton</ReturnButton>
      </Link>

      <Link to="/">
        <HomeButton>HomeButton</HomeButton>
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

const HomeButton = styled.button`
  position: absolute;
  bottom: 280px;
  left: 150px;
  padding: 5rem 24rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 30px;
  left: 60px;
  padding: 4rem 15rem;
  opacity: 0;
`;
