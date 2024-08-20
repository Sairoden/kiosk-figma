// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styled from "styled-components";
import visit9 from "../../assets/images/requestToVisit/Face ID Scan3.gif";

export default function RequestVisit9() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/requestVisit3");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={visit9} alt="visit9" />

      <Link to="/requestVisit2">
        <BackButton>Back button</BackButton>
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

const BackButton = styled.button`
  position: absolute;
  top: 1200px;
  left: 190px;
  padding: 4rem 20rem;
  opacity: 0;
`;
