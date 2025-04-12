import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../assets/orrapolylogo.png'; // Replace this with the path to your actual logo image

// Keyframe animations
const typingEffect = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 18ch;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #1f1f1f; /* Dark background for contrast */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction: column;
  padding: 20px;
`;

const LogoContainer = styled.div`
  animation: ${fadeIn} 2s ease-out;
`;

const LogoImage = styled.img`
  width: 200px; /* Bigger logo size */
  height: auto;
  margin-bottom: 20px;
`;

const TypingText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem; /* Larger text size */
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #3498db; /* Cursor effect */
  width: 0;
  animation: ${typingEffect} 0.8s steps(18) 0.8s forwards, ${fadeIn} 1s ease-out;
 
`;

const LoadingAnimation = () => {
  return (
    <LoadingContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="Orrapoly Logo" />
      </LogoContainer>
      <TypingText>Welcome to Orrapoly</TypingText> {/* The typing effect text */}
    </LoadingContainer>
  );
};

export default LoadingAnimation;
