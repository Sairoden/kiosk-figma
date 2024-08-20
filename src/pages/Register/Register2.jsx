// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register2 from "../../assets/images/registration/register2.png";

export default function Register2() {
  return (
    <div>
      <img src={register2} alt="Register 2" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register1">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register3-1">
        <FingerPrintButton></FingerPrintButton>
      </Link>
    </div>
  );
}

const FingerPrintButton = styled.button`
  position: absolute;
  top: 63rem;
  left: 25rem;
  padding: 18rem 23rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 12rem;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: -185rem;
  left: 20rem;
  padding: 5rem 13rem;
  opacity: 0;
`;
