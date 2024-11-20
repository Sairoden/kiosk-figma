// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import payment20 from "../../assets/images/payment/payment20.png";

export default function Payment20() {
  return (
    <StyledContainer>
      <StyledImage src={payment20} alt="payment20" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/payment21">
        <TapToPayButton></TapToPayButton>
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

const ReturnButton = styled.button`
  position: absolute;
  top: 60px;
  left: 80px;
  padding: 3rem 11rem;
  /* opacity: 0; */
`;

const TapToPayButton = styled.button`
  position: absolute;
  top: 750px;
  right: 550px;
  padding: 9rem 10rem;
  background: red;
`;
