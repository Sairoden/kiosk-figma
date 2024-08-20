import { Link } from "react-router-dom";
import styled from "styled-components";
import visit1 from "../../assets/images/requestToVisit/visit1.png";

export default function RequestVisit1() {
  return (
    <Container>
      <Link to="/requestVisit8">
        <Img src={visit1} alt="visit1" />
        <NextButton>FaceScan</NextButton>
      </Link>
      <Link to="/requestVisit9">
        <FingerButton>fingerprint</FingerButton>
      </Link>
      <Link to="/">
        <BackButton>Back button</BackButton>
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
  height: auto; /* Maintain aspect ratio */
`;

const NextButton = styled.button`
  width: 60%;
  height: 20%;
  position: absolute; /* Position it absolutely */
  top: 65%;
  left: 20%;
  right: 0%;
  opacity: 0;
`;
const FingerButton = styled.button`
  width: 60%;
  height: 20%;
  position: absolute; /* Position it absolutely */
  top: 35%;
  left: 20%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 30%;
  height: 10%; /* Make it half the height of the container */
  top: 85%; /* Space between buttons */
  left: 15%;
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
