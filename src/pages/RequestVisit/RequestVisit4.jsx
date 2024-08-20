import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit4 from "../../assets/images/requestToVisit/Visit4.png";
import { useRef } from "react";

export default function RequestVisit4() {
  const buttonRef = useRef(null);
  const handleImageClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click(); // Trigger the button click
    }
  };
  return (
    <div>
      {" "}
      <Link to="/requestVisit5">
        <Img src={visit4} alt="visit4" onClick={handleImageClick}></Img>
        <NextButton ref={buttonRef}>Next Button</NextButton>
      </Link>
      <Link to="/requestVisit3">
        <BackButton ref={buttonRef}>Back Button</BackButton>
      </Link>
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const NextButton = styled.button`
  width: 40%;
  height: 20%;
  position: absolute; /* Position it absolutely */
  top: 180%;
  left: 50%;
  right: 0%;
  opacity: 0;
`;

const BackButton = styled.button`
  width: 40%;
  height: 20%; /* Make it half the height of the container */
  top: 180%; /* Space between buttons */
  left: 10%;
  position: absolute; /* Position relative to the container */
  opacity: 0;
`;
