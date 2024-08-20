import { Link } from "react-router-dom";
import styled from "styled-components";
import visit1 from "../../assets/images/requestToVisit/Visit1.png";

export default function RequestVisit1() {
  return (
    <Container>
      <Link to="/requestVisit8">
        <Img src={visit1} alt="visit1" />
        <HiddenButton>Fingerprint</HiddenButton>
      </Link>
      <Link to="/">
        <OtherButton>Face scan</OtherButton>
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

const HiddenButton = styled.button`
  width: 100%;
  height: 50%;
  position: absolute; /* Position it absolutely */
  top: 85%;
  left: 0;
  opacity: 0;
`;

const OtherButton = styled.button`
  width: 100%;
  height: 50%; /* Make it half the height of the container */
  top: 165%; /* Space between buttons */
  left: 0%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
