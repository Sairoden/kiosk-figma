import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit6 from "../../assets/images/requestToVisit/visit6.png";

export default function RequestVisit6() {
  return (
    <StyledContainer>
      <StyledImage src={visit6} alt="visit6" />

      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>

      <Link to="/">
        <HomeButton>Home button</HomeButton>
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

const HomeButton = styled.button`
  position: absolute;
  bottom: 60px;
  left: 180px;
  padding: 4rem 20rem;
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
