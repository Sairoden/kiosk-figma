// REACT
import { HashRouter, Routes, Route } from "react-router-dom";

// PAGES
import {
  Layout,
  LandingPage,
  DocumentProcessing1,
  DocumentProcessing2,
  DocumentProcessing3,
  DocumentProcessing4,
  DocumentProcessing5,
  DocumentProcessing6,
  DocumentProcessing7,
  DocumentProcessing8,

  // REGISTRATION
  Register1,
  Register2,
  Register3,
  Register4,
  Register5,
  Register6,

  // REQUEST TO VISIT
  RequestVisit1,
  RequestVisit2,
  RequestVisit3,
  RequestVisit4,
  RequestVisit5,
  RequestVisit6,
} from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" index element={<LandingPage />} />

          {/* RERGISTRATION */}
          <Route path="/register1" element={<Register1 />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/register3" element={<Register3 />} />
          <Route path="/register4" element={<Register4 />} />
          <Route path="/register5" element={<Register5 />} />
          <Route path="/register6" element={<Register6 />} />

          {/* REQUEST TO VISIT */}
          <Route path="/requestVisit1" element={<RequestVisit1 />} />
          <Route path="/requestVisit2" element={<RequestVisit2 />} />
          <Route path="/requestVisit3" element={<RequestVisit3 />} />
          <Route path="/requestVisit4" element={<RequestVisit4 />} />
          <Route path="/requestVisit5" element={<RequestVisit5 />} />
          <Route path="/requestVisit6" element={<RequestVisit6 />} />

          {/* DOCUMENT PROCESSING */}
          <Route
            path="/documentProcessing1"
            element={<DocumentProcessing1 />}
          />
          <Route
            path="/documentProcessing2"
            element={<DocumentProcessing2 />}
          />

          <Route
            path="/documentProcessing3"
            element={<DocumentProcessing3 />}
          />

          <Route
            path="/documentProcessing4"
            element={<DocumentProcessing4 />}
          />

          <Route
            path="/documentProcessing5"
            element={<DocumentProcessing5 />}
          />

          <Route
            path="/documentProcessing6"
            element={<DocumentProcessing6 />}
          />

          <Route
            path="/documentProcessing7"
            element={<DocumentProcessing7 />}
          />

          <Route
            path="/documentProcessing8"
            element={<DocumentProcessing8 />}
          />
          {/* </Route> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
