import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

// Import your images
import haridwar from '../assets/haridwar.webp';
import rishikesh from '../assets/rishikesh.webp';
import roorkee from '../assets/roorkee.jpg';
import mirzapur from '../assets/mirzapur.webp';
import fazilnagar from '../assets/fazilnagar.webp';
import muzaffarnagar from '../assets/muzaffarnagar.webp';
import ranchi from '../assets/ranchi.webp';
import bihar from '../assets/bihar.webp';
import jharkhand from '../assets/jharkhand.webp';
import bareilly from '../assets/bareilly.webp';
import rampur from '../assets/Rampur.jpg';
import bombay from '../assets/bombay.webp';

const Container = styled.div`
  padding: 3rem 1rem;
  background-color: #f3ede3;
  text-align: center;
`;

const Label = styled.p`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #ff6ec4, #7873f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;


const Heading = styled.h2`
  font-size: 2.5rem;
  color: #1f1f1f;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 300px;
  }
`;


const Slide = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;


const Image = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;

  @media (max-width: 768px) {
    height: 80%;
  }
`;


// Memoizing the Slide component for optimization
const MemoizedSlide = memo(({ location, active }: { location: { name: string, image: string }, active: boolean }) => (
  <Slide active={active}>
    <Image src={location.image} alt={location.name} />
    <Label>{location.name}</Label>
  </Slide>
));

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
          <MemoizedSlide key={index} location={location} active={index === currentIndex} />
        ))}
      </SliderWrapper>
    </Container>
  );
};

export default Distribution;
