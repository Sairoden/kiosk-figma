import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit5 from "../../assets/images/requestToVisit/visit5.png";

export default function RequestVisit5() {
  return (
    <StyledContainer>
      <StyledImage src={visit5} alt="visit4" />

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/requestVisit4">
        <BackButton>Back button</BackButton>
      </Link>

      <Link to="/requestVisit6">
        <NextButton>Next button</NextButton>
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
  bottom: 620px;
  left: 110px;
  padding: 4rem 10rem;
  background: red;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 620px;
  left: 550px;
  padding: 4rem 10rem;
  background: red;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 60px;
  left: 80px;
  padding: 4rem 12rem;
  background: red;
  /* opacity: 0; */
`;
