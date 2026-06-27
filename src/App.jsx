import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Upload from "./pages/upload";
import Processing from "./pages/processing";
import Analysis from "./pages/analysis";
import Report from "./pages/Report";

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Investigation Workspace */}
      <Route path="/upload" element={<Upload />} />

      {/* AI Processing Pipeline */}
      <Route path="/processing" element={<Processing />} />

      {/* AI Analysis Dashboard */}
      <Route path="/analysis" element={<Analysis />} />

      {/* Final Investigation Report */}
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default App;