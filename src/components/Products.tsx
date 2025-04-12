// src/components/Products.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import product1 from '../assets/Products/10000_mtr_2_ply.png'
import product2 from '../assets/Products/2000_mtr_2_ply.png'
import product3 from '../assets/Products/5000_mtr_3_ply.png'
import product4 from '../assets/Products/20_tube_180_mtr_2_ply.png'



const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductsContainer = styled.div`
  padding: 4rem 1rem;
  background: #f3ede3;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #1f1f1f;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease forwards;
  transform: translateY(10px);
  opacity: 0;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  }
`;


const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 12px;
  margin-top: 10px;
`;

const ProductName = styled.h4`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
  transition: color 0.3s ease;

  ${ProductCard}:hover & {
    color: #6a11cb;
  }
`;

const ViewAllWrapper = styled.div`
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ViewAllButton = styled.button`
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
    transform: scale(1.05);
  }
`;


const products = [
  { name: '10000 MTR 2-Ply', image: product1 },
  { name: '2000 MTR 2-Ply', image: product2 },
  { name: '5000 MTR 3-Ply', image: product3 },
  { name: '20 Tube 180 MTR 2-Ply', image: product4 },
];

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <Heading>Our Products</Heading>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
          </ProductCard>
        ))}
      </ProductGrid>
      <ViewAllWrapper>
        <StyledLink to="/products">
          <ViewAllButton>View All Products</ViewAllButton>
        </StyledLink>
      </ViewAllWrapper>
    </ProductsContainer>
  );
};

export default Products;
