// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import dp7 from "../../assets/images/documentProcessing/dp7.png";

export default function DocumentProcessing7() {
  return (
    <StyledContainer>
      <StyledImage src={dp7} alt="" />

      <StyledButton>
        <Link to="/">
          <StyledButtonBack>Back</StyledButtonBack>
        </Link>
      </StyledButton>

      <StyledButtons>
        <Link to="/">
          <StyledButton1>Return to Home</StyledButton1>
        </Link>
      </StyledButtons>
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
const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  position: absolute;
  top: 6%; //Adjust as needed
  left: 25%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButtonBack = styled.button`
  padding: 15px 150px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  background-color: #3f51b549;
  /* top: 0;
  left: 0%; */
  /* border-radius: 30px; */
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 92.5%; //Adjust as needed
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButton1 = styled.button`
  padding: 32px 320px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  /* border-radius: 30px; */
  opacity: 0;
`;
