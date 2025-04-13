import React, { Suspense, lazy } from 'react';
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
import product9 from '../assets/Products/1000_mtr_3_ply.png';
import product10 from '../assets/Products/300_mtr_2_ply.png';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';

// Lazy load ProductCard component
const ProductCard = lazy(() => import('../components/ProductCard'));

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
          {/* Suspense to handle loading state of lazy-loaded components */}
          <Suspense fallback={<div>Loading products...</div>}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Suspense>
        </ProductGrid>
      </ProductContainer>

      <Footer />
    </ProductsContainer>
  );
};

export default AllProducts;
