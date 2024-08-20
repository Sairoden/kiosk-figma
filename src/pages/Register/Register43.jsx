// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register43 from "../../assets/images/registration/register4-3.png";

export default function Register43() {
  return (
    <div>
      <img src={register43} alt="Register 4" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register4-1">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register5-1">
        <GovernmentIDButton></GovernmentIDButton>
      </Link>
    </div>
  );
}

const GovernmentIDButton = styled.button`
  position: absolute;
  top: 180rem;
  left: 15rem;
  padding: 18rem 23rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 5rem;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: -150rem;
  left: 10rem;
  padding: 5rem 13rem;
  opacity: 0;
`;
