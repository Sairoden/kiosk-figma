// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import dp1 from "../assets/images/documentProcessing/dp1.png";

export default function DocumentProcessing2() {
  return (
    <StyledContainer>
      <StyledImage src={dp1} alt="Homepage" />
      <Link to="/firstPage">
        <StyledButtons>
          <StyledButton1>Yes, I have submitted them online.</StyledButton1>
          <StyledButton2>
            No, please let me know the instructions.
          </StyledButton2>
        </StyledButtons>
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

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 51%; //Adjust as needed
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButton1 = styled.button`
  padding: 30px 400px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  /* border-radius: 30px; */
`;

const StyledButton2 = styled.button`
  margin-top: 43px;
  padding: 30px 400px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  /* border-radius: 30px; */
`;
