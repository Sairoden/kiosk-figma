// REACT
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import camera from "../assets/images/camera.png";

export default function Layout() {
  const [isFixed, setIsFixed] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > window.innerHeight) {
  //       setIsFixed(false);
  //     } else {
  //       setIsFixed(true);
  //     }
  //   };
  // , [])

  return (
    <StyledLayout>
      <StyledImage src={camera} alt="Camera" />

      <StyledContent>
        <Outlet />
      </StyledContent>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledImage = styled.img`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const StyledContent = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 20px;
`;
