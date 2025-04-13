// src/components/PageBanner.tsx
import React from 'react';
import styled from 'styled-components';
import BannerImage from '../assets/threadbanner.webp';

interface PageBannerProps {
  headingText: string;
}

const BannerWrapper = styled.div`
  background-image: url(${BannerImage});
  background-position: center;
  height: 40vh;
  width: 100%;
  margin-top: 60px;
  box-sizing: border-box; /* ✅ Fixes width + padding issue */
  padding: 0px ;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    height: 30vh;
  }

  @media (max-width: 480px) {
    height: 18vh;
  }
`;

const BannerHeading = styled.h2`
  font-size: 3rem;
  color: black;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin: 0;
  transform: translateY(-70%);

  @media (max-width: 768px) {
    font-size: 2rem;
    transform: translateY(-30%);
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
