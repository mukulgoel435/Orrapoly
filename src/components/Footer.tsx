import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: #e0e0e0;
  padding: 3rem 1rem 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
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

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FooterItem = styled.p`
  font-size: 0.95rem;
  margin: 0.3rem 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const BottomNote = styled.div`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #aaa;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-top: 1.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const FooterLink = styled(Link)`
  font-size: 1.1rem;
  color: #e0e0e0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    color: #0077cc;
  }

  span {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterItem>📞 +91 9837050053</FooterItem>
          <FooterItem>📧 sales.orrapoly@gmail.com</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Manufacturing Unit</FooterTitle>
          <FooterItem>📍 Plot No. 105-106 IIDC Sidcul, Haridwar, Uttarakhand, India</FooterItem>
          <FooterItem>GST No: 05AATPG8449A1ZN</FooterItem>
        </FooterColumn>
      </FooterGrid>

      <FooterLinks>
        <FooterLink to="/" title="Home">
          <span>🏠</span>
          Home
        </FooterLink>
        <FooterLink to="/about" title="About Us">
          <span>ℹ️</span>
          About Us
        </FooterLink>
        <FooterLink to="/contact" title="Contact">
          <span>📞</span>
          Contact
        </FooterLink>
        <FooterLink to="/applications" title="Applications">
          <span>🧵</span>
          Applications
        </FooterLink>
        <FooterLink to="/products" title="Products">
          <span>📦</span>
          Products
        </FooterLink>
      </FooterLinks>

      <BottomNote>
        &copy; {new Date().getFullYear()} Orrapoly. All rights reserved.
      </BottomNote>
    </FooterContainer>
  );
};

export default Footer;
