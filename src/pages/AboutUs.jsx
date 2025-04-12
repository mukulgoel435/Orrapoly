// src/pages/Products.tsx
import React from 'react';
import styled from 'styled-components';
import ShadeCard from '../components/ShadeCard';
import BannerImage from '../assets/ThreadBanner.png';  
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import product1 from '../assets/Products/10000_mtr_2_ply.png';
import product2 from '../assets/Products/2000_mtr_2_ply.png';
import product3 from '../assets/Products/5000_mtr_3_ply.png';
import product4 from '../assets/Products/20_tube_180_mtr_2_ply.png';
import product5 from '../assets/Products/100_tube_180_mtr_2_ply.png';
import product6 from '../assets/Products/130_mtr_3_ply.jpeg';
import product7 from '../assets/Products/800_mtr.png';
import product8 from '../assets/Products/400_mtr_3_ply.png';
import product9 from '../assets/Products/1000_mtr_3_ply.png'
import product10 from '../assets/Products/300_mtr_2_ply.png'

// Styled components
const AboutContainer = styled.div`
  min-height: 100vh;
  background-color: #f3ede3;
  color: white;
`;

const Banner = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  height: 40vh;
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; // important for multiline heading
  padding: 0 1rem;

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
    transform: translateY(-70%);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    transform: translateY(-70%);
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #1f1f1f;
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
  color: #1f1f1f;
  font-family: 'Poppins', sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #333;
`;


const AboutUS = () => {
  return (
    <AboutContainer>
      {/* Navbar */}
      <NavbarWithSidebar />

      {/* Banner */}
      <Banner>
        <BannerHeading>About US</BannerHeading>
      </Banner>

      <AboutContent>
        <Heading>Who We Are</Heading>
        <Paragraph>
          At <strong>Orrapoly</strong>, we specialize in delivering high-quality polyester threads tailored to meet the needs of modern textile and garment industries. With a commitment to consistency, durability, and innovation, our threads are designed to support a wide range of applications — from everyday stitching to industrial-level production. Trusted by manufacturers across India, our goal is to offer threads that hold strength, color, and reliability in every spool.
        </Paragraph>

        <Heading>Our Vision</Heading>
        <Paragraph>
          Our vision is to become the leading supplier of premium polyester threads in India and beyond, driven by quality, integrity, and customer satisfaction. We aim to empower fabric creators and fashion industries with sustainable and superior threading solutions — thread by thread, stitch by stitch.
        </Paragraph>

        <Heading>What Sets Us Apart</Heading>
        <Paragraph>
          With years of industry experience, we understand the importance of precision and consistency. That’s why all our threads go through strict quality checks and come in a wide range of shades and textures. Whether you're looking for bulk supply or customized orders, <strong>Orrapoly</strong> stands ready to weave excellence into every strand.
        </Paragraph>
      </AboutContent>

        
    </AboutContainer>
  );
};

export default AboutUS;
