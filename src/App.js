import logo from "./logo.svg";
import "./App.css";

function App() {
  const figmaPrototypeUrl =
    "https://www.figma.com/proto/qCpgAKcZWWrdPHRuUOHs1s/FNCC-VMS?node-id=372-2103&t=a6ORrD1CquU7zvEr-0&scaling=min-zoom&content-scaling=fixed&page-id=355%3A2055&starting-point-node-id=372%3A2103&show-proto-sidebar=1"; // Your Figma prototype link

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={figmaPrototypeUrl}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Figma Prototype"
      />
    </div>
  );
}

export default App;
