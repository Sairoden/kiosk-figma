// REACT
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>Hello World</h1>
      <Link to="/firstPage">
        <button>First Page</button>
      </Link>
    </>
  );
}
