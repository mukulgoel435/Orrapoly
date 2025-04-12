import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
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
const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual content to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Shows loading animation for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

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
    </Router>
  );
};

export default App;
