// components/NavbarWithSidebar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .menu {
    display: flex;
    gap: 2rem;

    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: #ffd700;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 1.8rem;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Sidebar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100%')};
  height: 100vh;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  transition: right 0.3s ease-in-out;
  z-index: 999;

  .close {
    align-self: flex-end;
    font-size: 1.8rem;
    cursor: pointer;
  }

  a {
    color: white;
    margin: 1rem 0;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #ffd700;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const NavbarWithSidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar>
        <Logo>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            ORRAPOLY
          </Link>
        </Logo>
        <div className="menu">
        <Link to="/aboutus" style={{ fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>About Us</Link>
          <Link to="/products" style={{ fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>Products</Link>
          <a href="#application" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Application</a>
          <a href="#contact" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Contact Us</a>
        </div>
        <div className="hamburger" onClick={() => setSidebarOpen(true)}>☰</div>
      </Navbar>

      <Sidebar open={sidebarOpen}>
        <div className="close" onClick={() => setSidebarOpen(false)}>×</div>
        <Link to="/aboutus" onClick={() => setSidebarOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>About US</Link>
        <Link to="/products" onClick={() => setSidebarOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <a href="#application" onClick={() => setSidebarOpen(false)}>Application</a>
        <a href="#contact" onClick={() => setSidebarOpen(false)}>Contact Us</a>
      </Sidebar>
    </>
  );
};

export default NavbarWithSidebar;
