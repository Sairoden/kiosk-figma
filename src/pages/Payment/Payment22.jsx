// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// STYLES
import styled from "styled-components";

// ASSETS
import payment22 from "../../assets/images/payment/payment22.png";

export default function Payment22() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment23");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={payment22} alt="payment22" />

      <Link to="/">
        <ReturnButton></ReturnButton>
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
  top: 60px;
  left: 80px;
  padding: 3rem 11rem;
  /* opacity: 0; */
  background: red;
`;
