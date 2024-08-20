// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES

export default function LandingPage() {
  return (
    <>
      Hello World{" "}
      <Link to="/firstPage">
        <button>First Page</button>
      </Link>
    </>
  );
}
