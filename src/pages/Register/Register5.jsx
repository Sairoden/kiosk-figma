// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register5 from "../../assets/images/registration/register5.png";

export default function Register5() {
  return (
    <div>
      <img src={register5} alt="Register 5" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register4">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register6">
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
  bottom: 1rem;
  left: 8rem;
  padding: 5rem 13rem;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 5rem;
  padding: 5rem 13rem;
  opacity: 0;
`;
