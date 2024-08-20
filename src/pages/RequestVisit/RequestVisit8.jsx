// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styled from "styled-components";
import visit2 from "../../assets/images/requestToVisit/Visitor Request - Fingerprint Scanning.gif";

// Scan fingerprint
export default function RequestVisit8() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/requestVisit2");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={visit2} alt="visit1" />

      <Link to="/requestVisit1">
        <BackButton>back</BackButton>
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
  padding: 4rem 22rem;
  background: red;
`;
