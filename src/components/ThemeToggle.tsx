import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 5rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.theme === 'dark' ? 
    'linear-gradient(45deg, #00ff87, #60efff)' : 
    'linear-gradient(45deg, #ff6b6b, #ffd93d)'};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  font-size: 1.2rem;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    top: auto;
    bottom: 5rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      theme={theme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
    </ToggleButton>
  );
};

export default ThemeToggle; 