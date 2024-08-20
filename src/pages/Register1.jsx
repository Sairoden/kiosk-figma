// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register1 from "../assets/images/registration/register1.png";

export default function Register1() {
  return (
    <div>
      <img src={register1} alt="Register 1" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register21">
        <NextButton></NextButton>
      </Link>
    </div>
  );
}

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 5rem;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: -37rem;
  left: 8rem;
  padding: 5rem 13rem;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: -37rem;
  right: 5rem;
  padding: 5rem 13rem;
  opacity: 0;
`;
