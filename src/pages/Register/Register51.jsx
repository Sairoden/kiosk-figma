// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register51 from "../../assets/images/registration/register5-1.png";

export default function Register51() {
  return (
    <div>
      <Img>
        <img src={register51} alt="Register 5" />
      </Img>
      <Link to="/register4-3">
        <NextButton></NextButton>
      </Link>

      <Link to="/register5-3">
        <NextButton2></NextButton2>
      </Link>
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: -25rem;
  right: 6rem;
  padding: 5rem 25rem;
  opacity: 0;
`;

const NextButton2 = styled.button`
  position: absolute;
  bottom: -15rem;
  right: 6rem;
  padding: 5rem 25rem;
  opacity: 0;
`;
