import logo from "./logo.svg";
import "./App.css";

function App() {
  const figmaPrototypeUrl =
    "https://www.figma.com/proto/KIq4dbLHt4eiWEmnZZVxBd/Kiosk213213-(Community)?node-id=0-1&t=we0zmgRJUateEwHo-1"; // Your Figma prototype link

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
