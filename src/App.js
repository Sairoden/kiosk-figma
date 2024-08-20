import "./App.css";

function App() {
  const figmaPrototypeUrl =
    "https://www.figma.com/proto/qCpgAKcZWWrdPHRuUOHs1s/FNCC-VMS?node-id=372-2103&t=a6ORrD1CquU7zvEr-0&scaling=min-zoom&content-scaling=fixed&page-id=355%3A2055&starting-point-node-id=372%3A2103&show-proto-sidebar=1"; // Your Figma prototype link

  return (
    <div style={{ height: "100vh", width: "100vw", margin: 0 }}>
      <embed
        title="Figma Prototype"
        style={{ border: "none", width: "100%", height: "100%" }}
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/qCpgAKcZWWrdPHRuUOHs1s/FNCC-VMS?node-id=355-2055&t=FmOR0nT6VwMZUaP9-1&scaling=contain"
        allowFullScreen
      ></embed>
    </div>
  );
}

export default App;
