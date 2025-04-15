import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import product1 from '../assets/Products/10000_mtr_2_ply.png';
import product2 from '../assets/Products/2000_mtr_2_ply.png';
import product3 from '../assets/Products/5000_mtr_3_ply.png';
import product4 from '../assets/Products/20_tube_180_mtr_2_ply.png';

// Keyframes for fadeIn animation
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
  animation: ${fadeInUp} 0.8s ease forwards;
  transform: translateY(10px);
  opacity: 0;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
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

const ViewAllWrapper = styled.div`
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ViewAllButton = styled.button`
  background: linear-gradient(135deg,rgb(21, 111, 45) 0%,rgb(51, 220, 66) 100%);
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
  const [inView, setInView] = useState<boolean[]>(new Array(products.length).fill(false));

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the product is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setInView((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    }, options);

    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ProductsContainer>
      <Heading>Our Products</Heading>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCardContainer
            key={index}
            className="product-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ProductImage>
              <Img
                src={product.image}
                alt={product.name}
                loading="lazy" // Lazy load the image
              />
            </ProductImage>
            <ProductName>{product.name}</ProductName>
          </ProductCardContainer>
        ))}
      </ProductGrid>
      <ViewAllWrapper>
        <StyledLink to="/products">
          <ViewAllButton style={{ fontWeight: '800' }}>View All Products</ViewAllButton>
        </StyledLink>
      </ViewAllWrapper>
    </ProductsContainer>
  );
};

export default Products;
