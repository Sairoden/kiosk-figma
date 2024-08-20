// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register6 from "../../assets/images/registration/register6.png";

export default function Register6() {
  return (
    <div>
      <img src={register6} alt="Register 6" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register5-3">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register7">
        <NextButton></NextButton>
      </Link>
    </div>
  );
}

const NextButton = styled.button`
  position: absolute;
  bottom: 0rem;
  right: 5rem;
  padding: 5rem 13rem;
  opacity: 0;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 2rem;
  padding: 4rem 15rem;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  bottom: 0rem;
  left: 10rem;
  padding: 5rem 13rem;
  opacity: 0;
`;
