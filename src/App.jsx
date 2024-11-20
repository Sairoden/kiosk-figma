/* eslint-disable react/jsx-pascal-case */
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
  Payment1_1,
  Payment1_2,
  Payment1_3,
  Payment1_4,
  Payment1_5,
  Payment1_6,
  Payment1_7,
  Payment1_8,
  Payment1_9,
  Payment1_10,
  Payment1_11,
  Payment2,
  Payment2_1,
  Payment2_2,
  Payment2_3,
  Payment2_4,
  Payment2_5,
  Payment3,
  Payment3_1,
  Payment3_2,
  Payment3_3,
  Payment3_4,
  Payment3_5,
  Payment4,
  Payment5,
  Payment6,
  Payment7,
  Payment8,
  Payment9,
  Payment10,
  Payment10_1,
  Payment11,
  Payment11_1,
  Payment12,
  // ---
  Payment13,
  Payment14,
  Payment15,
  Payment16,
  Payment17,
  Payment18,
  Payment19,
  Payment20,
  Payment21,
  Payment22,
  Payment23,
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
          <Route path="/payment1_1" element={<Payment1_1 />} />
          <Route path="/payment1_2" element={<Payment1_2 />} />
          <Route path="/payment1_3" element={<Payment1_3 />} />
          <Route path="/payment1_4" element={<Payment1_4 />} />
          <Route path="/payment1_5" element={<Payment1_5 />} />
          <Route path="/payment1_6" element={<Payment1_6 />} />
          <Route path="/payment1_7" element={<Payment1_7 />} />
          <Route path="/payment1_8" element={<Payment1_8 />} />
          <Route path="/payment1_9" element={<Payment1_9 />} />
          <Route path="/payment1_10" element={<Payment1_10 />} />
          <Route path="/payment1_11" element={<Payment1_11 />} />
          <Route path="/payment2" element={<Payment2 />} />
          <Route path="/payment2_1" element={<Payment2_1 />} />
          <Route path="/payment2_2" element={<Payment2_2 />} />
          <Route path="/payment2_3" element={<Payment2_3 />} />
          <Route path="/payment2_4" element={<Payment2_4 />} />
          <Route path="/payment2_5" element={<Payment2_5 />} />
          <Route path="/payment3" element={<Payment3 />} />
          <Route path="/payment3_1" element={<Payment3_1 />} />
          <Route path="/payment3_2" element={<Payment3_2 />} />
          <Route path="/payment3_3" element={<Payment3_3 />} />
          <Route path="/payment3_4" element={<Payment3_4 />} />
          <Route path="/payment3_5" element={<Payment3_5 />} />
          <Route path="/payment4" element={<Payment4 />} />
          <Route path="/payment5" element={<Payment5 />} />
          <Route path="/payment6" element={<Payment6 />} />
          <Route path="/payment7" element={<Payment7 />} />
          <Route path="/payment8" element={<Payment8 />} />
          <Route path="/payment9" element={<Payment9 />} />
          <Route path="/payment10" element={<Payment10 />} />
          <Route path="/payment10_1" element={<Payment10_1 />} />
          <Route path="/payment11" element={<Payment11 />} />
          <Route path="/payment11_1" element={<Payment11_1 />} />
          <Route path="/payment12" element={<Payment12 />} />

          <Route path="/payment13" element={<Payment13 />} />
          <Route path="/payment14" element={<Payment14 />} />
          <Route path="/payment15" element={<Payment15 />} />
          <Route path="/payment16" element={<Payment16 />} />
          <Route path="/payment17" element={<Payment17 />} />
          <Route path="/payment18" element={<Payment18 />} />
          <Route path="/payment19" element={<Payment19 />} />
          <Route path="/payment20" element={<Payment20 />} />
          <Route path="/payment21" element={<Payment21 />} />
          <Route path="/payment22" element={<Payment22 />} />
          <Route path="/payment23" element={<Payment23 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
