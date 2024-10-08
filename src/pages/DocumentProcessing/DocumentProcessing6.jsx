// REACT
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import dp6 from "../../assets/images/documentProcessing/dp6.png";

export default function DocumentProcessing6() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/documentProcessing6");
  //   }, 5000);

  //   // Cleanup the timer if the component unmounts before 2 seconds
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={dp6} alt="" />
      <StyledButton>
        <Link to="/">
          <StyledButtonBack>Back</StyledButtonBack>
        </Link>
      </StyledButton>
      <StyledButtons>
        <Link to="/documentProcessing5">
          <StyledButton1>Print Reference No.</StyledButton1>
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
  top: 4%; //Adjust as needed
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
  opacity: 0;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 93.2%; //Adjust as needed
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const StyledButton1 = styled.button`
  padding: 32px 310px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  background-color: #3f51b549;
  /* border-radius: 30px; */
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
