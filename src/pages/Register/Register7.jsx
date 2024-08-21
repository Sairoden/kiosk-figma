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

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  z-index: -1;
  box-sizing: border-box;
`;

const HomeButton = styled.button`
  position: absolute;
<<<<<<< HEAD
  top: 20px;
  left: 20px;
  padding: 4rem 15rem;
=======
  bottom: 280px;
  left: 150px;
  padding: 5rem 24rem;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
<<<<<<< HEAD
  bottom: 300px;
  left: 100px;
  padding: 5rem 25rem;
=======
  top: 30px;
  left: 60px;
  padding: 4rem 15rem;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  opacity: 0;
`;
