import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PartnersPage from './pages/PartnersPage';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
