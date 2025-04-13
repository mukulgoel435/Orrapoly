import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }

  &:hover .details {
    opacity: 1;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem;
  background-color: #fff;
`;

const CardDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
`;

interface ApplicationCardProps {
  app: {
    name: string;
    image: string;
    description: string;
  };
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ app }) => {
  return (
    <CardContainer>
      <CardImage src={app.image} alt={app.name} loading="lazy" />
      <CardTitle>{app.name}</CardTitle>
      <CardDetails className="details">{app.description}</CardDetails>
    </CardContainer>
  );
};

export default ApplicationCard;
