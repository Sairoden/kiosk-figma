import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit2 from "../../assets/images/requestToVisit/visit2-2.png";

export default function RequestVisit2() {
  return (
    <div>
      {" "}
      <Link to="/requestVisit2">
        <Img src={visit2} alt="visit2"></Img>
        <HiddenButton>Back Button</HiddenButton>
      </Link>
      <Link to="/requestVisit9">
        <BackButton>Facescan</BackButton>
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
  left: 10%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 60%;
  height: 40%; /* Make it half the height of the container */
  top: 130%; /* Space between buttons */
  left: 20%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
