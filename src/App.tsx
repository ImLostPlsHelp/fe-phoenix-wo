import LandingPage from './pages/landing/LandingPage.tsx';
import Login from './pages/landing/Login.tsx';
import DashboardAdmin from './pages/landing/DashboardAdmin.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scp" element={<Login />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;