import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
  width: 120px;
  height: 120px;
  position: relative;
  margin-bottom: 1rem;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle */}
        <circle 
          cx="60" 
          cy="60" 
          r="50" 
          stroke="white" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="314.159"
          strokeDashoffset="314.159"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="314.159" 
            to="0" 
            dur="2s" 
            begin="0s" 
            fill="freeze" 
          />
        </circle>
        
        {/* Thread spool */}
        <circle cx="60" cy="60" r="20" stroke="white" strokeWidth="2" fill="none" />
        
        {/* Thread lines */}
        <path 
          d="M40 60 L80 60" 
          stroke="white" 
          strokeWidth="2"
          strokeDasharray="40"
          strokeDashoffset="40"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="40" 
            to="0" 
            dur="1s" 
            begin="0.5s" 
            fill="freeze" 
          />
        </path>
        
        <path 
          d="M60 40 L60 80" 
          stroke="white" 
          strokeWidth="2"
          strokeDasharray="40"
          strokeDashoffset="40"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="40" 
            to="0" 
            dur="1s" 
            begin="0.7s" 
            fill="freeze" 
          />
        </path>
        
        {/* Diagonal thread lines */}
        <path 
          d="M45 45 L75 75" 
          stroke="white" 
          strokeWidth="2"
          strokeDasharray="42.426"
          strokeDashoffset="42.426"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="42.426" 
            to="0" 
            dur="1s" 
            begin="0.9s" 
            fill="freeze" 
          />
        </path>
        
        <path 
          d="M75 45 L45 75" 
          stroke="white" 
          strokeWidth="2"
          strokeDasharray="42.426"
          strokeDashoffset="42.426"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="42.426" 
            to="0" 
            dur="1s" 
            begin="1.1s" 
            fill="freeze" 
          />
        </path>
        
        {/* Center dot */}
        <circle cx="60" cy="60" r="3" fill="white">
          <animate 
            attributeName="r" 
            from="0" 
            to="3" 
            dur="0.5s" 
            begin="1.3s" 
            fill="freeze" 
          />
        </circle>
      </svg>
    </LogoContainer>
  );
};

export default Logo; 