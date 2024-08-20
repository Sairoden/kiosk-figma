import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit5 from "../../assets/images/requestToVisit/visit5.png";

export default function RequestVisit5() {
  return (
    <Container>
      {" "}
      <Link to="/requestVisit6">
        <Img src={visit5} alt="visit5"></Img>
        <NextButton>Next Button</NextButton>
      </Link>
      <Link to="/requestVisit4">
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
  height: 100vh; /* Full height for the container */
  overflow: hidden; /* Prevent overflow */
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NextButton = styled.button`
  width: 40%;
  height: 10%;
  position: absolute; /* Position it absolutely */
  top: 84%;
  left: 50%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 40%;
  height: 10%; /* Make it half the height of the container */
  top: 84%; /* Space between buttons */
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
