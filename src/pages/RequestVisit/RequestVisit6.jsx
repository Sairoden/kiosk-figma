import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import visit6 from "../../assets/images/requestToVisit/Visit6.png";
import { useRef } from "react";

export default function RequestVisit6() {
  const buttonRef = useRef(null);
  const handleImageClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click(); // Trigger the button click
    }
  };
  return (
    <div>
      {" "}
      <Link to="/">
        <Img src={visit6} alt="visit6" onClick={handleImageClick}></Img>
        <HiddenButton ref={buttonRef}>Next Button</HiddenButton>
      </Link>
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HiddenButton = styled.button`
  position: absolute;
  padding: 0; /* Remove padding to match image size */
  width: 100%; /* Make button width same as image */
  height: 100%; /* Make button height same as image */
  background-color: red;
  opacity: 0; /* Hide button */
  cursor: pointer; /* Show pointer cursor */
`;
