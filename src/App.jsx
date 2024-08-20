// REACT
import { HashRouter, Routes, Route } from "react-router-dom";

// PAGES
import { LandingPage, DocumentProcessing, SecondPage } from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/documentProcessing" element={<DocumentProcessing />} />
          <Route path="/secondPage" element={<SecondPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
