import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit2 from "../../assets/images/requestToVisit/visit2-2.png";

export default function RequestVisit2() {
  return (
    <Container>
      <Img src={visit2} alt="visit2" />

      <Link to="/requestvisit9">
        <OtherButton>Faces scan</OtherButton>
      </Link>
      <Link to="/requestVisit2">
        <BackButton>Back</BackButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%; /* Maintain aspect ratio */
`;

const OtherButton = styled.button`
  width: 100%;
  height: 60%; /* Make it half the height of the container */
  top: 190%; /* Space between buttons */
  left: 0%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;

const BackButton = styled.button`
  width: 100%;
  height: 50%; /* Make it half the height of the container */
  top: 255%; /* Space between buttons */
  left: 0%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
