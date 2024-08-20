import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit2 from "../../assets/images/requestToVisit/visit2-1.png";

// Scan fingerprint
export default function RequestVisit8() {
  return (
    <div>
      <Link to="/requestVisit2">
        <Img src={visit2} alt="visit1" />
        <NextButton>fingerprint</NextButton>
      </Link>
      <Link to="/">
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
  height: 40%;
  position: absolute; /* Position it absolutely */
  top: 80%;
  left: 20%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 70%;
  height: 20%; /* Make it half the height of the container */
  top: 130%; /* Space between buttons */
  left: 15%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
