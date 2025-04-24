import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
