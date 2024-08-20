// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register42 from "../../assets/images/registration/register4-2.png";

export default function Register42() {
  return (
    <div>
      <img src={register42} alt="Register 4" />
      <Link to="/register4-1">
        <NextButton></NextButton>
      </Link>
      *
    </div>
  );
}

const NextButton = styled.button`
  position: absolute;
  bottom: -42rem;
  right: 22rem;
  padding: 5rem 25rem;
  opacity: 0;
`;
