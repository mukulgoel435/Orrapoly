import React, { Suspense, lazy } from 'react';
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

// Lazy load the Card component
const Card = lazy(() => import('../components/ApplicationCard'));

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

const Applications = () => {
  return (
    <PageContainer>
      <NavbarWithSidebar />
      <PageBanner headingText="Applications of Our Thread" />
      <Section>
        <Suspense fallback={<div>Loading...</div>}>
          <Grid>
            {applications.map((app, idx) => (
              <Card key={idx} app={app} />
            ))}
          </Grid>
        </Suspense>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default Applications;
