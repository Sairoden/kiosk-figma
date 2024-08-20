// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register6 from "../assets/images/registration/register6.png";

export default function Register6() {
  return (
    <div>
      <img src={register6} alt="Register 6" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/">
        <HomeButton></HomeButton>
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

const HomeButton = styled.button`
  position: absolute;
  bottom: -20rem;
  left: 12rem;
  padding: 5rem 25rem;
  opacity: 0;
`;
