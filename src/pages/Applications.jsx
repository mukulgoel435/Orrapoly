import React from 'react';
import styled from 'styled-components';
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import garment from '../assets/Applications/GarmentStiching.jpg';
import footwear from '../assets/Applications/FootwearStiching.jpg';
import automotive from '../assets/Applications/AutomotiveUpholstery.jpg';
import furniture from '../assets/Applications/FurnitureUpholstery.jpg';
import industrial from '../assets/Applications/IndustrialSewing.webp';
import embroidery from '../assets/Applications/EmbroideryWork.jpg';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
// Sample Application Data
const applications = [
  {
    name: 'Garment Stitching',
    image: garment,
    description: 'Used in sewing garments due to strength and durability.'
  },
  {
    name: 'Footwear Stiching',
    image: footwear,
    description: 'Provides reliable stitching in shoes and sandals.'
  },
  {
    name: 'Automotive Upholstery',
    image: automotive,
    description: 'Ideal for car seat covers and interior linings.'
  },
  {
    name: 'Furniture Upholstery',
    image: furniture,
    description: 'Used for stitching cushions and sofa covers.'
  },
  {
    name: 'Industrial Sewing',
    image: industrial,
    description: 'Perfect for heavy-duty bags and tarpaulin stitching.'
  },
  {
    name: 'Embroidery Work',
    image: embroidery,
    description: 'Used in machine and hand embroidery applications.'
  },
];

const PageContainer = styled.div`
  background-color: #f3ede3;
  min-height: 100vh;
`;

const Section = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #1f1f1f;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
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
  background: rgba(0,0,0,0.75);
  color: white;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
`;

const Applications = () => {
  return (
    <PageContainer>
      <NavbarWithSidebar />
      <PageBanner headingText="Applications of Our Thread" />
      <Section>
        <Grid>
          {applications.map((app, idx) => (
            <Card key={idx}>
              <CardImage src={app.image} alt={app.name} />
              <CardTitle>{app.name}</CardTitle>
              <CardDetails className="details">{app.description}</CardDetails>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default Applications;
