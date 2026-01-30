import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [headerBg, setHeaderBg] = useState("transparent");

  return (
    <div className="App">
      <Header bgColor={headerBg} />
      <Main setHeaderBg={setHeaderBg} />
      <Footer />
    </div>
  );
}

export default App;
