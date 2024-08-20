// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// STYLES
import styled from "styled-components";

// ASSETS
import register31 from "../../assets/images/registration/register3-1.gif";

export default function Register31() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register3-3");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <img src={register31} alt="Register 3" />
      <Link to="/register2">
        <NextButton></NextButton>
      </Link>
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
