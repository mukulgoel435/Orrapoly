import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import your images
import haridwar from '../assets/haridwar.jpeg';
import rishikesh from '../assets/Rishkesh.jpeg';
import roorkee from '../assets/roorkee.jpg';
import mirzapur from '../assets/Mirzapur.jpg';
import fazilnagar from '../assets/Fazilnagar.jpg';
import muzaffarnagar from '../assets/Muzaffarnagar.jpg';
import ranchi from '../assets/Ranchi.jpg';
import bihar from '../assets/BIhar.jpg';
import jharkhand from '../assets/Jharkhand.jpg';
import bareilly from '../assets/bareilly.jpg';
import rampur from '../assets/Rampur.jpg';
import bombay from '../assets/Bombay.jpg';

const Container = styled.div`
  padding: 3rem 1rem;
  background-color: #f3ede3;
  text-align: center;
`;

const Label = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #ff6ec4, #7873f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.8s ease-in-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #1f1f1f;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
  animation: fadeIn 1s ease-in-out;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
`;


const locations = [
  { name: 'Haridwar', image: haridwar },
  { name: 'Rishikesh', image: rishikesh },
  { name: 'Roorkee', image: roorkee },
  { name: 'Bareilly', image: bareilly },
  { name: 'Rampur', image: rampur },
  { name: 'Bombay', image: bombay },
  { name: 'Ranchi', image: ranchi },
  { name: 'Bihar', image: bihar },
  { name: 'Jharkhand', image: jharkhand },
  { name: 'Muzaffarnagar', image: muzaffarnagar },
  { name: 'Fazilnagar', image: fazilnagar },
  { name: 'Mirzapur', image: mirzapur },
];

const Distribution: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 2000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Heading>Distribution in India</Heading>
      <SliderWrapper>
        {locations.map((location, index) => (
          <Slide key={index} active={index === currentIndex}>
            <Image src={location.image} alt={location.name} />
            <Label>{location.name}</Label>
          </Slide>
        ))}
      </SliderWrapper>
    </Container>
  );
};

export default Distribution;
