import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PartnersPage from './pages/PartnersPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
