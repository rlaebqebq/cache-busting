import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootPage from "./_page/RootPage";
import APage from "./_page/APage";
import BPage from "./_page/BPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RootPage />} />
        <Route path="/a/*" element={<APage />} />
        <Route path="/b/*" element={<BPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
