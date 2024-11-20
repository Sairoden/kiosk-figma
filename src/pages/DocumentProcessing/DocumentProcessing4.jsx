import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import dp4 from "../../assets/images/documentProcessing/dp4.png";

export default function DocumentProcessing4() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/documentProcessing6");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledImage src={dp4} alt="" />
      <StyledButton>
        <Link to="/">
          <StyledButtonBack>Back</StyledButtonBack>
        </Link>
      </StyledButton>
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
  position: absolute;
  top: 6%; // Adjust as needed
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
  border-radius: 30px;
  opacity: 0;
`;
