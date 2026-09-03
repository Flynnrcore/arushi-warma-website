import { BrowserRouter, Routes, Route } from "react-router-dom";

import { VideoBackground } from "./components/VideoBackground";
import MainPage from "./pages/MainPage";
import ReleasePage from "./pages/ReleasePage";

function App() {
  return (
    <BrowserRouter>
      <VideoBackground>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/release/:id" element={<ReleasePage />} />
        </Routes>
      </VideoBackground>
    </BrowserRouter>
  );
}

export default App;
