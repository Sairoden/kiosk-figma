// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register32 from "../../assets/images/registration/register3-2.png";

export default function Register32() {
  return (
    <div>
      <img src={register32} alt="Register 3" />
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
