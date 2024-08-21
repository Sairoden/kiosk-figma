// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register6 from "../../assets/images/registration/register6.png";

export default function Register6() {
  return (
    <StyledContainer>
      <StyledImage src={register6} alt="Register 6" />

      <Link to="/">
        <ReturnButton>ReturnButton</ReturnButton>
      </Link>

      <Link to="/register5-3">
        <PrevButton>PrevButton</PrevButton>
      </Link>

      <Link to="/register7">
        <NextButton>NextButton</NextButton>
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

const NextButton = styled.button`
  position: absolute;
  bottom: 620px;
<<<<<<< HEAD
  right: 80px;
  padding: 5rem 13rem;
=======
  left: 580px;
  padding: 5rem 11rem;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
<<<<<<< HEAD
  top: 20px;
  left: 20px;
=======
  top: 30px;
  left: 60px;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 620px;
  left: 130px;
<<<<<<< HEAD
  padding: 5rem 13rem;
=======
  padding: 5rem 11rem;
>>>>>>> b88e871df26a6a4075c83f5daefb1a9dfc5e0f70
  opacity: 0;
`;
