// REACT
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import camera from "../assets/images/camera.png";

export default function Layout() {
  return (
    <div>
      <ImageWrapper>
        <img src={camera} alt="camera" />
      </ImageWrapper>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

const ImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  text-align: center;
`;
