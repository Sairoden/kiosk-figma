// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register21 from "../assets/images/registration/register2-1.png";
import register22 from "../assets/images/registration/register2-2.png";

export default function Register21() {
  return (
    <div>
      <img src={register21} alt="Register 21" />
      <img src={register22} alt="Register 22" />

      <Link to="/">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register21">
        <NextButton></NextButton>
      </Link>
    </div>
  );
}

const PrevButton = styled.button`
  background-color: red;
  position: absolute;
  bottom: -37rem;
  left: 8rem;
  padding: 5rem 13rem;
  /* opacity: 0; */
`;

const NextButton = styled.button`
  background-color: red;
  position: absolute;
  bottom: -37rem;
  right: 5rem;
  padding: 5rem 13rem;
  /* opacity: 0; */
`;
