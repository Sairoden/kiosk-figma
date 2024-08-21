// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register51 from "../../assets/images/registration/register5-1.png";

export default function Register51() {
  return (
    <StyledContainer>
      <StyledImage src={register51} alt="Register 5" />

      <Link to="/register4-3">
        <CancelButton>Cancel Button</CancelButton>
      </Link>

      <Link to="/register5-3">
        <PhotoButton>Photo Button</PhotoButton>
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
<<<<<<< HEAD
const NextButton = styled.button`
  position: absolute;
  bottom: 200px;
  right: 120px;
  padding: 5rem 25rem;
=======

const CancelButton = styled.button`
  position: absolute;
  bottom: 220px;
  right: 125px;
  padding: 4rem 22rem;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  opacity: 0;
`;

const PhotoButton = styled.button`
  position: absolute;
  bottom: 380px;
<<<<<<< HEAD
  right: 120px;
  padding: 5rem 25rem;
=======
  right: 125px;
  padding: 4rem 22rem;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  opacity: 0;
`;
