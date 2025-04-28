import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
const PageContainer = styled.div`
  background-color: #f3ede3;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContactContainer = styled.div`
  padding: 2rem 1rem;

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }

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
  text-align: center;
  min-width: 200px;

  @media (max-width: 480px) {
    width: 100%; // ✅ Full width for small screens
    padding: 1rem;
  }

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

  @media (max-width: 480px) {
  margin-left : 0.5rem;
    margin-right: 2.5rem;
  }
`;


const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1.25rem; // Reduce bottom margin for mobile devices
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (max-width: 480px) {
    padding: 0.75rem 1rem; // Add padding to the left and right for better alignment
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (max-width: 480px) {
    padding: 0.75rem 1rem; // Add padding to the left and right for better alignment
  }
`;

const Rating = styled.div`
  font-size: 2.5rem;
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
      <PageBanner headingText="Contact Us" />

      <ContactContainer>
        <ContactButtons>
          <ContactButton
            href="mailto:sales.orrapoly@gmail.com"
            className="email"
          >
            Email Us
          </ContactButton>
        </ContactButtons>

        <ContactForm
          action="https://formspree.io/f/myzwzaog"
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
      <Footer />
    </PageContainer>
  );
};

export default Contact;
