// REACT
import { HashRouter, Routes, Route } from "react-router-dom";

// PAGES
import { LandingPage, FirstPage, SecondPage } from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
