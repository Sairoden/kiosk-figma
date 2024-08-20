// REACT
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import dp5 from "../assets/images/documentProcessing/dp5.1.gif";

export default function DocumentProcessing5() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/documentProcessing6");
    }, 5000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={dp5} alt="" />
      <StyledButton>
        <Link to="/">
          <StyledButtonBack>Back</StyledButtonBack>
        </Link>
      </StyledButton>
      <StyledButtons>
        <Link to="/documentProcessing1">
          <StyledButton1>Cancel</StyledButton1>
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
  left: 11%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButtonBack = styled.button`
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
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
  top: 68%; //Adjust as needed
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButton1 = styled.button`
  padding: 50px 320px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  /* border-radius: 30px; */
`;
