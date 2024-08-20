// REACT
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>Hello World</h1>
      <div style={{ height: "100vh", width: "100vw", margin: 0 }}>
        <iframe
          title="Figma Prototype"
          style={{ border: "none", width: "100%", height: "100%" }}
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/qCpgAKcZWWrdPHRuUOHs1s/FNCC-VMS?node-id=355-2055&t=FmOR0nT6VwMZUaP9-1&scaling=contain"
          allowFullScreen
        ></iframe>
      </div>
      {/* <Link to="/firstPage">
        <button>First Page</button>
      </Link> */}
    </>
  );
}
