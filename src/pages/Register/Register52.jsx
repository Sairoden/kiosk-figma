// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register52 from "../../assets/images/registration/register5-2.png";

export default function Register52() {
  return (
    <StyledContainer>
      <Img src={register52} alt="Register 5" />
      <Link to="/register4-1">
        <NextButton></NextButton>
      </Link>
      *
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

const NextButton = styled.button`
  position: absolute;
  bottom: -42rem;
  right: 22rem;
  padding: 5rem 25rem;
  opacity: 0;
`;
