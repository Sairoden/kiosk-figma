import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit3 from "../../assets/images/requestToVisit/visit3-2.png";
import { useRef } from "react";

export default function RequestVisit3() {
  return (
    <div>
      {" "}
      <Link to="/requestVisit4">
        <Img src={visit3} alt="visit3"></Img>
        <HiddenButton>Next Button</HiddenButton>
      </Link>
      <Link to="/requestVisit3">
        <BackButton>Back Button</BackButton>
      </Link>
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const HiddenButton = styled.button`
  width: 40%;
  height: 10%;
  position: absolute; /* Position it absolutely */
  top: 180%;
  left: 50%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 40%;
  height: 10%; /* Make it half the height of the container */
  top: 180%; /* Space between buttons */
  left: 10%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
