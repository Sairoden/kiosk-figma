import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit3 from "../../assets/images/requestToVisit/visit3-2.png";
import { useRef } from "react";

export default function RequestVisit3() {
  return (
    <StyledContainer>
      <StyledImage src={visit3} alt="visit3"></StyledImage>

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/requestVisit2">
        <BackButton>Back button</BackButton>
      </Link>

      <Link to="/requestVisit4">
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
  bottom: 130px;
  left: 550px;
  padding: 4rem 10rem;
  opacity: 0;
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 130px;
  left: 100px;
  padding: 4rem 10rem;
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
