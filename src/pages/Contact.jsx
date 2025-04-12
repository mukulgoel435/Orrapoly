import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import BannerImage from '../assets/ThreadBanner.png';
import garment from '../assets/Applications/GarmentStiching.jpg';
import footwear from '../assets/Applications/FootwearStiching.jpg';
import automotive from '../assets/Applications/AutomotiveUpholstery.jpg';
import furniture from '../assets/Applications/FurnitureUpholstery.jpg';
import industrial from '../assets/Applications/IndustrialSewing.webp';
import embroidery from '../assets/Applications/EmbroideryWork.jpg';

const PageContainer = styled.div`
  background-color: #f3ede3;
  min-height: 100vh;
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
  text-align: center;
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
    transform: translateY(-30%);
  }
`;

const ContactContainer = styled.div`
  padding: 3rem 1rem;
  background-color: #f3ede3;
  text-align: center;
`;

const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactButton = styled.a`
  background-color: #25D366;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1eb94c;
  }

  &.email {
    background-color: #0072C6;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Rating = styled.div`
  font-size: 1.5rem;
  color: gold;
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const Contact = () => {
  const [rating, setRating] = useState(0);

  return (
    <PageContainer>
      <NavbarWithSidebar />
      <Banner>
        <BannerHeading>Contact Us</BannerHeading>
      </Banner>

      <ContactContainer>
        <ContactButtons>
          <ContactButton
            href="https://wa.me/9837050053"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </ContactButton>
          <ContactButton
            href="mailto:jaidurgaind@gmail.com"
            className="email"
          >
            Email Us
          </ContactButton>
        </ContactButtons>

        <ContactForm
          action="https://formspree.io/f/mnnpwdad"
          method="POST"
        >
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label>Comment</Label>
            <Textarea name="comment" rows="4" required />
          </FormGroup>
          <FormGroup>
            <Label>Rating</Label>
            <Rating>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{ cursor: 'pointer', color: star <= rating ? 'gold' : '#ccc' }}
                >
                  ★
                </span>
              ))}
              <input type="hidden" name="rating" value={rating} />
            </Rating>
          </FormGroup>
          <SubmitButton type="submit">Send Feedback</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
