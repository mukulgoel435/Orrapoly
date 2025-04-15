import React from 'react';
import styled from 'styled-components';
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';

const LegalContainer = styled.div`
  min-height: 100vh;
  background-color: #f3ede3;
  color: #1f1f1f;
  overflow-x: hidden;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #1f1f1f;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #1f1f1f;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const LegalContent = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
  color: #1f1f1f;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding: 0 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  margin-left: 2rem;
  color: #333;

  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Legal: React.FC = () => {
  return (
    <LegalContainer>
      <NavbarWithSidebar />
      <PageBanner headingText="Privacy Policy & Disclaimer" />

      <LegalContent>
        <Heading>🛡️ Privacy Policy for <span>ORRA</span>POLY</Heading>
        <Paragraph><strong>Effective Date:</strong> 10th April 2025</Paragraph>
        <Paragraph>
          At ORRAPOLY, accessible from <a href="https://www.orrapoly.com" style={{ color: 'darkgreen' }}>https://www.orrapoly.com</a>, the privacy of our visitors is one of our top priorities. This Privacy Policy outlines the types of information we collect and how we use it.
        </Paragraph>

        <SubHeading>1. Information We Collect</SubHeading>
        <List>
          <ListItem>Name and email address (via contact forms)</ListItem>
          <ListItem>Your usage data (via cookies or Google Analytics)</ListItem>
        </List>

        <SubHeading>2. How We Use Information</SubHeading>
        <List>
          <ListItem>Respond to your inquiries</ListItem>
          <ListItem>Improve user experience</ListItem>
          <ListItem>Analyze website traffic</ListItem>
          <ListItem>Serve relevant advertisements (via Google AdSense)</ListItem>
        </List>

        <SubHeading>3. Cookies and Web Beacons</SubHeading>
        <Paragraph>
          Like many websites, ORRAPOLY uses cookies to store information about visitors’ preferences and the pages they visit to optimize the user experience.
        </Paragraph>
        <Paragraph>You can disable cookies in your browser settings.</Paragraph>

        <SubHeading>4. Third-Party Services</SubHeading>
        <Paragraph>
          We may use third-party services like Google AdSense and Google Analytics. These services may collect data to show personalized ads or track website performance.
        </Paragraph>
        <Paragraph>
          Google may use cookies (like the DART cookie) to serve ads based on your visit to ORRAPOLY and other websites.
        </Paragraph>
        <Paragraph>
          To opt out of personalized ads from Google, visit: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'darkgreen' }}>Google Ad Settings</a>
        </Paragraph>

        <SubHeading>5. Your Consent</SubHeading>
        <Paragraph>By using our website, you consent to our Privacy Policy and agree to its terms.</Paragraph>

        <SubHeading>6. Changes to this Policy</SubHeading>
        <Paragraph>We may update this policy from time to time. Any changes will be posted on this page.</Paragraph>

        <hr style={{ margin: '3rem 0', borderColor: '#444' }} />

        <Heading>⚠️ Disclaimer for <span>ORRA</span>POLY</Heading>

        <SubHeading>1. Product Information</SubHeading>
        <Paragraph>
          We strive to provide accurate details about our polyester thread products and their applications. However, we make no guarantees regarding the results of using our products.
        </Paragraph>

        <SubHeading>2. No Professional Advice</SubHeading>
        <Paragraph>
          The content on this website does not constitute technical, legal, or professional advice. For specific queries, always consult a qualified expert.
        </Paragraph>

        <SubHeading>3. External Links</SubHeading>
        <Paragraph>
          ORRAPOLY may contain links to other websites. We are not responsible for the content or practices of any third-party sites.
        </Paragraph>

        <SubHeading>4. Limitation of Liability</SubHeading>
        <Paragraph>
          Under no circumstance shall ORRAPOLY be liable for any damages resulting from the use or inability to use the materials on our website.
        </Paragraph>
      </LegalContent>
      <Footer />
    </LegalContainer>
  );
};

export default Legal;
