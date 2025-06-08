import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [headerBg, setHeaderBg] = useState('transparent');

  return (
    <div className="App">
      <Header bgColor={headerBg} />
      <Main setHeaderBg={setHeaderBg} />
      <Footer />
    </div>
  );
}

export default App;
