import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit6 from "../../assets/images/requestToVisit/visit6.png";

export default function RequestVisit6() {
  return (
    <Container>
      {" "}
      <Link to="/">
        <Img src={visit6} alt="visit6"></Img>
        <BackButton>Next Button</BackButton>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  position: relative; /* Ensure absolute positioning works */
  width: 100%;
  height: 140vh; /* Full height for the container */
  overflow: hidden; /* Prevent overflow */
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;

const BackButton = styled.button`
  width: 70%;
  height: 10%; /* Make it half the height of the container */
  top: 90%; /* Space between buttons */
  left: 18%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
