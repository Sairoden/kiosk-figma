// REACT
import { HashRouter, Routes, Route } from "react-router-dom";

// PAGES
import {
  LandingPage,
  DocumentProcessing1,
  DocumentProcessing2,
  SecondPage,

  // REGISTRATION
  Register1,
  Register21,
  Register22,
  Register31,
  Register32,
  Register4,
  Register5,
  Register6,
} from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />} />

          {/* RERGISTRATION */}
          <Route path="/register1" element={<Register1 />} />
          <Route path="/register21" element={<Register21 />} />
          <Route path="/register22" element={<Register22 />} />
          <Route path="/register31" element={<Register31 />} />
          <Route path="/register32" element={<Register32 />} />
          <Route path="/register4" element={<Register4 />} />
          <Route path="/register5" element={<Register5 />} />
          <Route path="/register6" element={<Register6 />} />

          {/* DOCUMENT PROCESSING */}
          <Route
            path="/documentProcessing1"
            element={<DocumentProcessing1 />}
          />
          <Route
            path="/documentProcessing2"
            element={<DocumentProcessing2 />}
          />

          <Route path="/secondPage" element={<SecondPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
