import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background:rgb(243, 238, 229);
  border-radius: 16px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    margin: 2rem 1rem; /* Adds left and right margin on smaller screens */
    padding: 1.5rem 1rem; /* Less padding on small screens */
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.9rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.9rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color:rgb(90, 171, 65);
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e47070;
  }
`;

const RequestCallForm = () => {
  return (
    <FormContainer>
      <FormTitle>Request A Call</FormTitle>
      <StyledForm
        action="https://formspree.io/f/mpwpnjqw"
        method="POST"
      >
        <Input
          type="text"
          name="name"
          placeholder="Your name*"
          required
        />
         <Input type="email" name="email" placeholder="Your Email*" required />
        <Input
          type="text"
          name="company"
          placeholder="Your Company"
        />
        <Input
          type="tel"
          name="mobile"
          placeholder="10-digit Mobile Number*"
          pattern="[0-9]{10}"
          required
        />
        <Select name="category" required>
          <option value="">Choose Category*</option>
          <option value="130 MTR 3-ply - 20 Tube">130 MTR 3-ply - 20 Tube</option>
          <option value="135 MTR 3-ply - 100 Tube">135 MTR 3-ply - 100 Tube</option>
          <option value="180 MTR 2-Ply - 20 Tube">180 MTR 2-Ply - 20 Tube</option>
          <option value="180 MTR 3-ply - 100 Tube">180 MTR 3-ply - 100 Tube</option>
          <option value="300 MTR 2-ply">300 MTR 2-ply</option>
          <option value="400 MTR 3-ply">400 MTR 3-ply</option>
          <option value="800 MTR 2-ply - 10 Tube">800 MTR 2-ply - 10 Tube</option>
          <option value="1000 MTR 3-ply - 10 Tube">1000 MTR 3-ply - 10 Tube</option>
          <option value="2000 MTR 2-Ply">2000 MTR 2-Ply</option>
          <option value="5000 MTR 3-Ply">5000 MTR 3-Ply</option>
          <option value="10000 MTR 2-Ply">10000 MTR 2-Ply</option> 
          <option value="Custom Order">Custom Order</option>
         
        </Select>
        <Input
          type="number"
          name="quantityRequired"
          placeholder="Quantity Required*"
          required
        />
        <Textarea
          name="description"
          placeholder="Description*"
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default RequestCallForm;
