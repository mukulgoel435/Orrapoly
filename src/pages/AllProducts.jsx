// src/pages/Products.tsx
import React from 'react';
import styled from 'styled-components';
import NavbarWithSidebar from '../components/NavbarWithSidebar';
import product1 from '../assets/Products/10000_mtr_2_ply.png';
import product2 from '../assets/Products/2000_mtr_2_ply.png';
import product3 from '../assets/Products/5000_mtr_3_ply.png';
import product4 from '../assets/Products/20_tube_180_mtr_2_ply.png';
import product5 from '../assets/Products/100_tube_180_mtr_2_ply.png';
import product6 from '../assets/Products/130_mtr_3_ply.jpeg';
import product7 from '../assets/Products/800_mtr.png';
import product8 from '../assets/Products/400_mtr_3_ply.png';
import product9 from '../assets/Products/1000_mtr_3_ply.png'
import product10 from '../assets/Products/300_mtr_2_ply.png'
import PageBanner from '../components/PageBanner';

const ProductsContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: white;
`;

const ProductContainer = styled.div`
  padding: 2rem 1rem;
  background: #f3ede3;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
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

  ${ProductCard}:hover & {
    color: #0077cc;
  }
`;

const ProductPrice = styled.div`
  font-size: 0.9rem;
  color: #4b5563;
  margin-top: 0.5rem;
`;

const products = [
  { name: '10000 MTR 2-Ply', image: product1 },
  { name: '2000 MTR 2-Ply', image: product2 },
  { name: '5000 MTR 3-Ply', image: product3 },
  { name: '20 Tube 180 MTR 2-Ply', image: product4 },
  { name: '100 Tube 180 MTR 3-Ply', image: product5 },
  { name: '130 MTR 3-Ply', image: product6 },
  { name: '300 MTR 2-Ply', image: product10 },
  { name: '800 MTR 2-Ply', image: product7 },
  { name: '400 MTR 3-Ply', image: product8 },
  { name: '1000 MTR 3-Ply', image: product9 },
];

const AllProducts = () => {
  return (
    <ProductsContainer>
      <NavbarWithSidebar />
      <PageBanner headingText="Explore Our Products" />

        <ProductContainer>
          <ProductGrid>
            {products.map((product, index) => (
              <ProductCard key={index}>
              <ProductImage>
                <Img src={product.image} alt={product.name} />
              </ProductImage>
                <ProductName>{product.name}</ProductName>
                </ProductCard>
            
            ))}
          </ProductGrid>
        </ProductContainer>
    </ProductsContainer>
  );
};

export default AllProducts;
