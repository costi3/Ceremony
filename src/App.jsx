import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import CameraPage from "./pages/CameraPage";
import Loading from "./pages/Loading";
import End from "./pages/End";
import Tier1 from "./pages/Tier1";
import Tier2 from "./pages/Tier2";
import Tier3 from "./pages/Tier3";
import Undiagnosed from "./pages/Undiagnosed";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/camera" element={<CameraPage />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/tier1" element={<Tier1 />} />
      <Route path="/tier2" element={<Tier2 />} />
      <Route path="/tier3" element={<Tier3 />} />
      <Route path="/undiagnosed" element={<Undiagnosed />} />

      <Route path="/end" element={<End />} />
    </Routes>
  );
}
