import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.12);
  }
`;

const ProductImage = styled.div`
  height: 180px;
  background-color: #f9fafb;
  padding: 1.5rem;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const ProductName = styled.div`
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.3px;
  background-color: #ffffff;
  transition: color 0.3s ease;

  ${ProductCardContainer}:hover & {
    color: #0077cc;
  }
`;

interface ProductCardProps {
  product: {
    name: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage>
        <Img src={product.image} alt={product.name} />
      </ProductImage>
      <ProductName>{product.name}</ProductName>
    </ProductCardContainer>
  );
};

export default ProductCard;
