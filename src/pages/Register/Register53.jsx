// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register53 from "../../assets/images/registration/register5-3.png";

export default function Register53() {
  return (
    <div>
      <img src={register53} alt="Register 5" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register5-1">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register6">
        <NextButton></NextButton>
      </Link>
    </div>
  );
}

const NextButton = styled.button`
  position: absolute;
  bottom: -185rem;
  right: 20rem;
  padding: 5rem 13rem;
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
