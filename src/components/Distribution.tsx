// src/components/Distribution.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DistributionContainer = styled.div`
  padding: 2rem;
  background-color: #0a0d28;
  color: white;
  text-align: center;
`;

const Slider = styled.div`
  position: relative;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  perspective: 1000px;
`;

const Slide = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const locations = [
  { name: 'Haridwar', image: '/images/haridwar.jpg' },
  { name: 'Rishikesh', image: '/images/rishikesh.jpg' },
  { name: 'Roorkee', image: '/images/roorkee.jpg' },
  // Add more locations as needed
];

const Distribution: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + locations.length) % locations.length);
  };

  return (
    <DistributionContainer>
      <h2>Distribution Places</h2>
      <Slider>
        {locations.map((location, index) => (
          <Slide
            key={location.name}
            animate={{
              transform: `rotateY(${(index - currentIndex) * 60}deg) translateZ(300px)`,
            }}
            transition={{ duration: 1 }}
          >
            <Image src={location.image} alt={location.name} />
            <p>{location.name}</p>
          </Slide>
        ))}
      </Slider>
      <button onClick={handlePrev}>{"<"}</button>
      <button onClick={handleNext}>{">"}</button>
    </DistributionContainer>
  );
};

export default Distribution;