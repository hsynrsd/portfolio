import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';
import LanguageToggle from './LanguageToggle';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 8px ${props => props.theme === 'dark' ? 
    'rgba(0, 0, 0, 0.2)' : 
    'rgba(0, 0, 0, 0.1)'};
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--nav-bg);
  padding: 2rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const NavLink = styled.a<{ $isMobile?: boolean }>`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: ${props => props.$isMobile ? '1.5rem' : '1rem'};
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${props => props.theme === 'dark' ? '#00ff87' : '#00b85f'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const menuItems = [
    { href: '#', text: t('nav.home') },
    { href: '#skills', text: t('nav.skills') },
    { href: '#projects', text: t('nav.projects') },
    { href: '#contact', text: t('nav.contact') },
  ];

  return (
    <Nav theme={theme}>
      <NavContainer>
        <Logo href="#">HR</Logo>
        <DesktopMenu>
          {menuItems.map((item) => (
            <NavLink key={item.href} href={item.href} theme={theme}>
              {item.text}
            </NavLink>
          ))}
        </DesktopMenu>
        <NavActions>
          <LanguageToggle />
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <i className="fas fa-bars"></i>
          </MobileMenuButton>
        </NavActions>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            theme={theme}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
              <i className="fas fa-times"></i>
            </CloseButton>
            {menuItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                theme={theme}
                $isMobile
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </NavLink>
            ))}
            <LanguageToggle />
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;