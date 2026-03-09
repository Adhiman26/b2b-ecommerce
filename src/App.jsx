import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import PDP from './pages/PDP';
import ComparisonMatrix from './pages/ComparisonMatrix';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navigation />
        <main className="main-content container">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pdp/:id" element={<PDP />} />
            <Route path="/compare" element={<ComparisonMatrix />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
