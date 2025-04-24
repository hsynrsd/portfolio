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
  padding: 0.75rem 1rem;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 8px ${props => props.theme === 'dark' ? 
    'rgba(0, 0, 0, 0.2)' : 
    'rgba(0, 0, 0, 0.1)'};

  @supports not (backdrop-filter: blur(10px)) {
    background: var(--nav-bg-solid);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    padding: 0 0.25rem;
    gap: 1rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $isMobile?: boolean }>`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: ${props => props.$isMobile ? '1.25rem' : '1rem'};
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.25rem;
  }
  
  &:hover {
    color: var(--accent-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (max-width: 480px) {
    display: block;
  }
`;

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  min-width: 200px;
`;

const MobileNavLink = styled(NavLink)`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: 100%;
  text-align: left;
  
  &:hover {
    background: var(--card-bg);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SafeArea = styled.div`
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
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
      <SafeArea>
        <NavContainer>
          <Logo href="#">HR</Logo>
          
          <MenuItems>
            {menuItems.map((item) => (
              <NavLink key={item.href} href={item.href} theme={theme}>
                {item.text}
              </NavLink>
            ))}
          </MenuItems>

          <NavActions>
            <LanguageToggle />
            <MobileMenuButton 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
            </MobileMenuButton>
          </NavActions>
        </NavContainer>
      </SafeArea>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <MobileMenuItems>
              {menuItems.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  theme={theme}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </MobileNavLink>
              ))}
              <LanguageToggle />
            </MobileMenuItems>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;