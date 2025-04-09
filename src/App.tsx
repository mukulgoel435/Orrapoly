import React from 'react';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import Distribution from './components/Distribution';
import Products from './components/Products';
import Footer from './components/Footer';


const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <LandingPage />
      <Distribution />
      <Products />
      <Footer />
    </AppContainer>
  );
};

export default App;
