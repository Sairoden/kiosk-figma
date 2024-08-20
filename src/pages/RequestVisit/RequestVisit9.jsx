import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit9 from "../../assets/images/requestToVisit/visit3-1.png";

export default function RequestVisit9() {
  return (
    <div>
      <Link to="/requestVisit3">
        <Img src={visit9} alt="visit9" />
        <NextButton>FaceScan</NextButton>
      </Link>
      <Link to="/requestVisit2">
        <BackButton>Back button</BackButton>
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
  top: 50%;
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
