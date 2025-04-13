import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../assets/orrapolylogo.png'; 

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
  background: #1f1f1f; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction: column;
  padding: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 3s ease-out; 
`;

const LogoImage = styled.img`
  width: 200px; 
  height: auto;
  margin-bottom: 20px; 
`;

const TypingText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem; 
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #3498db; 
  width: 0;
  animation: ${typingEffect} 2s steps(18) infinite, ${fadeIn} 1s ease-out; 
`;

const LoadingAnimation = () => {
  return (
    <LoadingContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="Orrapoly Logo" />
        <TypingText>Welcome to Orrapoly....</TypingText> 
      </LogoContainer>
    </LoadingContainer>
  );
};

export default LoadingAnimation;
