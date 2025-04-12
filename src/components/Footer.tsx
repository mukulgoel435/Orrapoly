// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: #e0e0e0;
  padding: 3rem 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FooterItem = styled.p`
  font-size: 0.95rem;
  margin: 0.3rem 0;
`;

const BottomNote = styled.div`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #aaa;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterItem>📞 +91 6398963929</FooterItem>
          <FooterItem>📧 jaidurgaind@gmail.com</FooterItem>
        </FooterColumn>

        <FooterColumn>
          
          <FooterTitle>Manufacturing Unit</FooterTitle>
          <FooterItem>📍 Plot No. 105-106 IIDC Sidcul, Haridwar, Uttarakhand, India</FooterItem>
          <FooterItem>GST No: 09ABCDE1234F1Z5</FooterItem>
        </FooterColumn>
      </FooterGrid>

      <BottomNote>
        &copy; {new Date().getFullYear()} Orrapoly. All rights reserved.
      </BottomNote>
    </FooterContainer>
  );
};

export default Footer;
