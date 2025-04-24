import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

const ToggleContainer = styled.button`
  background: var(--card-bg);
  border: 2px solid var(--accent-color);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background: var(--accent-gradient);
    color: var(--button-text);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const Flag = styled.span`
  font-size: 1.2rem;
`;

const Tooltip = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  z-index: 1001;
`;

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en');
  };

  return (
    <ToggleContainer 
      onClick={toggleLanguage} 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      aria-label={t('nav.toggleLang')}
    >
      <Flag>{language === 'en' ? 'EN' : 'BG'}</Flag>
      {language === 'en' ? 'BG' : 'EN'}
      <Tooltip visible={showTooltip}>
        {t('nav.toggleLang')}
      </Tooltip>
    </ToggleContainer>
  );
};

export default LanguageToggle; 