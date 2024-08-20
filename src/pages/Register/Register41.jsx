// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// STYLES
import styled from "styled-components";

// ASSETS
import register41 from "../../assets/images/registration/register4-1.png";

export default function Register41() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register4-3");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={register41} alt="Register 4" />
      <Link to="/register3-3">
        <NextButton></NextButton>
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
  bottom: 350px;
  right: 150px;
  padding: 5rem 25rem;
  opacity: 0;
`;
