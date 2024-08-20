// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styled from "styled-components";
import visit2 from "../../assets/images/requestToVisit/Visitor Request - Fingerprint Scanning.gif";

// Scan fingerprint
export default function RequestVisit8() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/requestVisit2");
    }, 3000);

    // Cleanup the timer if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <Link to="/requestVisit2">
        <Img src={visit2} alt="visit1" />
        <NextButton>fingerprint</NextButton>
      </Link>

      <Link to="/requestVisit1">
        <BackButton>back</BackButton>
      </Link>
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%; /* Maintain aspect ratio */
`;

const NextButton = styled.button`
  width: 60%;
  height: 30%;
  position: absolute; /* Position it absolutely */
  top: 60%;
  left: 20%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 70%;
  height: 10%; /* Make it half the height of the container */
  top: 95%; /* Space between buttons */
  left: 15%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
