import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit2 from "../../assets/images/requestToVisit/visit2-2.png";

export default function RequestVisit2() {
  return (
    <StyledContainer>
      <StyledImage src={visit2} alt="visit2"></StyledImage>

      <Link to="/">
        <ReturnButton>Return</ReturnButton>
      </Link>

      <Link to="/requestVisit9">
        <ScanButton>Facescan</ScanButton>
      </Link>

      <Link to="/requestVisit1">
        <BackButton>Back Button</BackButton>
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

const ScanButton = styled.button`
  position: absolute;
  top: 1650px;
  left: 200px;
  padding: 18rem 19rem;
  opacity: 0;
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 120px;
  left: 80px;
  padding: 4rem 12rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 60px;
  left: 80px;
  padding: 4rem 12rem;
  opacity: 0;
  /* opacity: 0; */
`;
