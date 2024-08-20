// REACT
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import camera from "../assets/images/camera.png";

export default function Layout() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledLayout>
      <StyledImage src={camera} alt="Camera" isFixed={isFixed} />
      <StyledContent isFixed={isFixed}>
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
  position: ${({ isFixed }) => (isFixed ? "fixed" : "static")};
  top: ${({ isFixed }) => (isFixed ? "0" : "auto")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  margin-top: ${({ isFixed }) => (isFixed ? "0" : "100vh")};
`;

const StyledContent = styled.div`
  margin-top: ${({ isFixed }) => (isFixed ? "100px" : "0")};
  width: 100%;
  padding: 20px;
`;
