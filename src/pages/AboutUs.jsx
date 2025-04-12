// src/pages/Products.tsx
import React from 'react';
import styled from 'styled-components';
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
const AboutContainer = styled.div`
  min-height: 100vh;
  background-color: #f3ede3;
  color: white;
  overflow-x: hidden;
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
      <NavbarWithSidebar />
      <PageBanner headingText="About Us" />

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
      <Footer />
        
    </AboutContainer>
  );
};

export default AboutUS;
