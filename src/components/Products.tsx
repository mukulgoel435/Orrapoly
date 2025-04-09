// src/components/Products.tsx
import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProductCard = styled.div`
  background-color: #eaeaea;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <h2>Our Products</h2>
      <ProductGrid>
        <ProductCard>Product 1</ProductCard>
        <ProductCard>Product 2</ProductCard>
        <ProductCard>Product 3</ProductCard>
        {/* Add more products as needed */}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products;