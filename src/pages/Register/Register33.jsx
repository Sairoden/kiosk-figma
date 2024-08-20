// REACT
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import register33 from "../../assets/images/registration/register3-3.png";

export default function Register33() {
  return (
    <div>
      <img src={register33} alt="Register 3" />

      <Link to="/">
        <ReturnButton></ReturnButton>
      </Link>

      <Link to="/register3-1">
        <PrevButton></PrevButton>
      </Link>

      <Link to="/register4-1">
        <FaceIDButton></FaceIDButton>
      </Link>
    </div>
  );
}

const FaceIDButton = styled.button`
  position: absolute;
  top: 120rem;
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
