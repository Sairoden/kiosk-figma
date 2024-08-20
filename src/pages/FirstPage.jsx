// REACT
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES

export default function FirstPage() {
  return (
    <>
      First Page
      <Link to="/secondPage">
        <button>Second Page</button>
      </Link>
    </>
  );
}
