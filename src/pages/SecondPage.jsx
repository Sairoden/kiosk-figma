// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES

export default function SecondPage() {
  return (
    <>
      Second Page{" "}
      <Link to="/">
        <button>Landing Page</button>
      </Link>
    </>
  );
}
