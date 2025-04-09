// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Contact us: info@orrapoly.com</p>
      <p>Follow us on social media</p>
    </FooterContainer>
  );
};

export default Footer;