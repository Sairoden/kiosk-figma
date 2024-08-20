// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES

export default function FirstPage() {
  return (
    <>
      First Page
      <button as={Link} to="/secondPage">
        Second Page
      </button>
    </>
  );
}
