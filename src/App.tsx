import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Distribution from './components/Distribution';
import Products from './components/Products';
import Footer from './components/Footer';
import ShadeCard from './components/ShadeCard';
import AllProducts from '../src/pages/AllProducts';
import AboutUS from '../src/pages/AboutUs';
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
      </Routes>
    </Router>
  );
};

export default App;
