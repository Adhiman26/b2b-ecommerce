import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PLP from './pages/PLP';
import PDP from './pages/PDP';
import Checkout from './pages/Checkout';
import ComparisonMatrix from './pages/ComparisonMatrix';
import QuoteWorkspace from './pages/QuoteWorkspace';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ flex: 1, background: 'var(--bg-canvas)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plp" element={<PLP />} />
            <Route path="/compare" element={<ComparisonMatrix />} />
            <Route path="/quote" element={<QuoteWorkspace />} />
            <Route path="/product/:id" element={<PDP />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
