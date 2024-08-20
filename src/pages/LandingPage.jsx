// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES

export default function LandingPage() {
  return (
    <>
      Hello World{" "}
      <button as={Link} to="/firstPage">
        First Page
      </button>
    </>
  );
}
