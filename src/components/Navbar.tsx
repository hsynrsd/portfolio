import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const Logo = styled(motion.a)`
  color: white;
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.3s ease-in-out;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00ff87;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  @media (max-width: 992px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            HR
          </Logo>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </NavLink>
            <NavLink
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              whileHover={{ scale: 1.1 }}
            >
              Skills
            </NavLink>
            <NavLink
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </NavLink>
          </NavLinks>
        </NavContent>
      </NavContainer>
      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar; 