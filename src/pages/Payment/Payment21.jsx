// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// STYLES
import styled from "styled-components";

// ASSETS
import payment21 from "../../assets/images/payment/payment21.png";

export default function Payment21() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment22");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={payment21} alt="payment21" />

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
