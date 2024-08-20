// REACT
import { HashRouter, Routes, Route } from "react-router-dom";

// PAGES
import {
  LandingPage,
  DocumentProcessing,
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
          <Route path="/documentProcessing" element={<DocumentProcessing />} />
          <Route path="/secondPage" element={<SecondPage />} />

          {/* RERGISTRATION */}
          <Route path="/register1" element={<Register1 />} />
          <Route path="/register21" element={<Register21 />} />
          <Route path="/register22" element={<Register22 />} />
          <Route path="/register31" element={<Register31 />} />
          <Route path="/register32" element={<Register32 />} />
          <Route path="/register4" element={<Register4 />} />
          <Route path="/register5" element={<Register5 />} />
          <Route path="/register6" element={<Register6 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
