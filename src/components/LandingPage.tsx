import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../assets/orrapolylogo.png';
import background from '../assets/thread-background.jpg';
import ThreadModel from './ThreadModel';

// Styled Component
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  color: black;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: Add a slight background for contrast */
  border-radius: 12px;
`;

const LogoImage = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 1rem;
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0.8;
    font-weight: 300;
  }
`;

const BrandTagline = styled(motion.div)`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  opacity: 0.7;
  font-style: italic;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  opacity: 0.7;
  cursor: pointer;
  pointer-events: auto;
  
  .arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    transform: rotate(45deg);
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

// Main Landing Page Component
const LandingPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <StyledContainer>
      <Content>
        <LogoImage src={logo} alt="Orrapoly Logo" />
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>ORRAPOLY</h1>
          <p>Precision in Every Strand, Excellence in Every Roll</p>
          <BrandTagline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Threads of Tomorrow, Delivered Today          
            </BrandTagline>
        </HeroContent>
      </Content>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={handleScrollDown}
      >
        <span style={{color:"black"}}>Scroll to explore</span>
        <div className="arrow" />
      </ScrollIndicator>
    </StyledContainer>
  );
};

export default LandingPage; 