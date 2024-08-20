// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// STYLES
import styled from "styled-components";

// ASSETS
import register41 from "../../assets/images/registration/register4-1.png";

export default function Register41() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register4-3");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <img src={register41} alt="Register 4" />
      <Link to="/register3-3">
        <NextButton></NextButton>
      </Link>
      *
    </div>
  );
}

const NextButton = styled.button`
  position: absolute;
  bottom: -52rem;
  right: 22rem;
  padding: 5rem 25rem;
  opacity: 0;
`;
