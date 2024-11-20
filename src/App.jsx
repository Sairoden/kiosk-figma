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

  // REGISTRATION
  Register1,
  Register2,
  Register31,
  Register32,
  Register33,
  Register41,
  Register42,
  Register43,
  Register51,
  Register52,
  Register53,
  Register6,
  Register7,

  // REQUEST TO VISIT
  RequestVisit1,
  RequestVisit2,
  RequestVisit3,
  RequestVisit4,
  RequestVisit5,
  RequestVisit6,
  RequestVisit7,
  RequestVisit8,
  RequestVisit9,

  // PAYMENT
  Payment1,
} from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register2" element={<Register2 />} />

            <Route path="/register3-3" element={<Register33 />} />
            <Route path="/register4-3" element={<Register43 />} />
            <Route path="/register5-3" element={<Register53 />} />

            <Route path="/requestVisit1" element={<RequestVisit1 />} />
            <Route path="/requestVisit2" element={<RequestVisit2 />} />
            <Route path="/requestVisit3" element={<RequestVisit3 />} />
          </Route>

          <Route path="/" index element={<LandingPage />} />

          {/* RERGISTRATION */}
          <Route path="/register3-1" element={<Register31 />} />
          <Route path="/register4-1" element={<Register41 />} />

          <Route path="/register5-1" element={<Register51 />} />

          <Route path="/register1" element={<Register1 />} />

          <Route path="/register3-2" element={<Register32 />} />
          <Route path="/register4-2" element={<Register42 />} />
          <Route path="/register5-2" element={<Register52 />} />
          <Route path="/register6" element={<Register6 />} />
          <Route path="/register7" element={<Register7 />} />

          {/* REQUEST TO VISIT */}
          <Route path="/requestVisit4" element={<RequestVisit4 />} />
          <Route path="/requestVisit5" element={<RequestVisit5 />} />
          <Route path="/requestVisit6" element={<RequestVisit6 />} />
          <Route path="/requestVisit7" element={<RequestVisit7 />} />
          <Route path="/requestVisit8" element={<RequestVisit8 />} />
          <Route path="/requestVisit9" element={<RequestVisit9 />} />

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
          {/* PAYMENT */}
          <Route path="/payment1" element={<Payment1 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
