import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit3 from "../../assets/images/requestToVisit/visit3-2.png";
import { useRef } from "react";

export default function RequestVisit3() {
  return (
    <Container>
      {" "}
      <Link to="/requestVisit4">
        <Img src={visit3} alt="visit3"></Img>
        <HiddenButton>Next Button</HiddenButton>
      </Link>
      <Link to="/requestVisit2">
        <BackButton>Back Button</BackButton>
      </Link>
      <Link to="/">
        <ReturnButton>Return button</ReturnButton>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  position: relative; /* Ensure absolute positioning works */
  width: 100%;
  height: 200vh; /* Full height for the container */
  overflow: hidden; /* Prevent overflow */
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;

const HiddenButton = styled.button`
  width: 40%;
  height: 10%;
  position: absolute; /* Position it absolutely */
  top: 90%;
  left: 50%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 40%;
  height: 10%; /* Make it half the height of the container */
  top: 90%; /* Space between buttons */
  left: 10%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;

const ReturnButton = styled.button`
  width: 30%;
  height: 10%; /* Make it half the height of the container */
  top: 2%; /* Space between buttons */
  left: 0%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
