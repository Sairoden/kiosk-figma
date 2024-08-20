import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit6 from "../../assets/images/requestToVisit/Visit6.png";

export default function RequestVisit6() {
  return (
    <div>
      {" "}
      <Link to="/">
        <Img src={visit6} alt="visit6"></Img>
        <BackButton>Next Button</BackButton>
      </Link>
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const BackButton = styled.button`
  width: 70%;
  height: 10%; /* Make it half the height of the container */
  top: 126%; /* Space between buttons */
  left: 18%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
