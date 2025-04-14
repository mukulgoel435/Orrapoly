// src/components/PageBanner.tsx
import React from 'react';
import styled from 'styled-components';
import BannerImage from '../assets/Banner_image_optimized.png';

interface PageBannerProps {
  headingText: string;
}

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${BannerImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Transparent black layer */
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 34vh;
  }

  @media (max-width: 480px) {
    height: 24vh;
  }
`;


const BannerHeading = styled.h2`
  position: relative;
  z-index: 3;
  font-size: 2.5rem;
  color: black;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.7); /* White transparent background */
  border: 2px solid white; /* White border */
  border-radius: 8px; /* Optional: Rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Optional: subtle shadow */

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    padding: 0.5rem 1rem;
  }
`;



const PageBanner: React.FC<PageBannerProps> = ({ headingText }) => {
  return (
    <BannerWrapper>
      <BannerHeading>{headingText}</BannerHeading>
    </BannerWrapper>
  );
};

export default PageBanner;
