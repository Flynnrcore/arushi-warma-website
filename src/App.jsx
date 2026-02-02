import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ReleasePage from "./pages/ReleasePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/release/:id" element={<ReleasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
