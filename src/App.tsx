import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Distribution from './components/Distribution';
import Products from './components/Products';
import Footer from './components/Footer';
import ShadeCard from './components/ShadeCard';
import AllProducts from '../src/pages/AllProducts';
import AboutUS from '../src/pages/AboutUs';
import Applications from '../src/pages/Applications';
import Contact from '../src/pages/Contact';
import LoadingAnimation from './components/loadingAnimation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
`;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <Distribution />
            <Products />
            <ShadeCard />
            <Footer />
          </>
        } />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
