import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';
import {
  faInfoCircle,
  faBoxOpen,
  faThList,
  faEnvelope,
  faXmark,
  faHouse
} from '@fortawesome/free-solid-svg-icons';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background-color: #1f1f1f;
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
      font-weight: 800;
      transition: color 0.3s;

      &:hover {
        color: rgb(60, 199, 55);
      }

      &.active {
        color: rgb(60, 199, 55);
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
  width: 260px;
  background-color: #11101d;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  transition: right 0.3s ease-in-out;
  z-index: 999;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .title {
      font-size: 1.4rem;
      font-weight: 800;
      color: #fff;
    }

    .close {
      font-size: 1rem;
      cursor: pointer;
      color: white;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    padding: 1rem 1.2rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &.active {
      background-color:rgb(60, 199, 55);
      color: #11101d;
    }

    svg {
      font-size: 1.2rem;
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
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);


  return (
    <>
      <Navbar>
        <Logo>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <span style={{ color: 'rgb(60, 199, 55)' }}>ORRA</span><span style={{ color: '#ffffff' }}>POLY</span>
          </Link>
        </Logo>
        <div className="menu">
          <Link
            to="/aboutus"
            onClick={() => setActiveLink('/aboutus')}
            className={activeLink === '/aboutus' ? 'active' : ''}
          >
            About Us
          </Link>
          <Link
            to="/products"
            onClick={() => setActiveLink('/products')}
            className={activeLink === '/products' ? 'active' : ''}
          >
            Products
          </Link>
          <Link
            to="/applications"
            onClick={() => setActiveLink('/applications')}
            className={activeLink === '/applications' ? 'active' : ''}
          >
            Applications
          </Link>
          <Link
            to="/contact"
            onClick={() => setActiveLink('/contact')}
            className={activeLink === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={() => setSidebarOpen(true)}>☰</div>
      </Navbar>

      <Sidebar open={sidebarOpen}>
        <div className="header">
          <div className="title">Menu</div>
          <div className="close" onClick={() => setSidebarOpen(false)}><FontAwesomeIcon icon={faXmark} size="2x" /></div>
        </div>
        
        <Link
          to="/"
          onClick={() => { setActiveLink('/'); setSidebarOpen(false); }}
          className={activeLink === '/' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faHouse} size="2x" /> Home
        </Link>

        <Link
          to="/aboutus"
          onClick={() => { setActiveLink('/aboutus'); setSidebarOpen(false); }}
          className={activeLink === '/aboutus' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faInfoCircle} size="2x" /> About Us
        </Link>
        <Link
          to="/products"
          onClick={() => { setActiveLink('/products'); setSidebarOpen(false); }}
          className={activeLink === '/products' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faBoxOpen} size="2x" /> Products
        </Link>
        <Link
          to="/applications"
          onClick={() => { setActiveLink('/applications'); setSidebarOpen(false); }}
          className={activeLink === '/applications' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faThList} size="2x" /> Applications
        </Link>
        <Link
          to="/contact"
          onClick={() => { setActiveLink('/contact'); setSidebarOpen(false); }}
          className={activeLink === '/contact' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" /> Contact
        </Link>
      </Sidebar>
    </>
  );
};

export default NavbarWithSidebar;
