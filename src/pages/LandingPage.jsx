// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import homepage from "../assets/images/Kiosk Homepage.png";

export default function YourComponent() {
  return (
    <StyledContainer>
      <StyledImage src={homepage} alt="Homepage" />
      <StyledButtons>
        <Link to="/register1">
          <StyledButton1>Registration Registration</StyledButton1>
        </Link>
        <Link to="/documentProcessing1">
          <StyledButton2>Document Processing</StyledButton2>
        </Link>
        <Link to="/payment13">
          <StyledButton3>Payment Payment</StyledButton3>
        </Link>
        <Link to="/requestVisit1">
          <StyledButton4>Request to Visit</StyledButton4>
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

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 56%; //Adjust as needed
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButton1 = styled.button`
  padding: 115px 400px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  border-radius: 30px;
  opacity: 0;
`;

const StyledButton2 = styled.button`
  margin-top: 43px;
  padding: 115px 400px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  border-radius: 30px;
  opacity: 0;
`;

const StyledButton3 = styled.button`
  margin-top: 43px;
  padding: 115px 400px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  border-radius: 30px;
  opacity: 0;
`;

const StyledButton4 = styled.button`
  margin-top: 43px;
  padding: 115px 400px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  border-radius: 30px;
  opacity: 0;
`;
