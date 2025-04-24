import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useState } from 'react';

function App() {
  const [headerBg, setHeaderBg] = useState('transparent');

  return (
    <div className="App">
      <Header bgColor={headerBg} />
      <Main setHeaderBg={setHeaderBg} />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
