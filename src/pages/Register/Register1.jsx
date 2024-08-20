// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register1 from "../../assets/images/registration/register1.png";

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

      <Link to="/register2">
        <NextButton></NextButton>
      </Link>
    </div>
  );
}

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 12rem;
  padding: 4rem 15rem;
  /* opacity: 0; */
  background-color: red;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: -72rem;
  left: 20rem;
  padding: 5rem 13rem;
  /* opacity: 0; */
  background-color: red;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: -72rem;
  right: 20rem;
  padding: 5rem 13rem;
  /* opacity: 0; */
  background-color: red;
`;
