import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BridgePage from './pages/BridgePage';
import MainPage from './pages/MainPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BridgePage />} />
        <Route path="/oficial" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
