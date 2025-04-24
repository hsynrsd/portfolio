import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation, TranslationKey } from '../../translations';

const FactContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 8px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  cursor: pointer;

  @media (max-width: 992px) {
    display: none;
  }
`;

const FactText = styled.p`
  margin: 0;
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const FactIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`;

interface Fact {
  text: TranslationKey;
  icon: string;
}

const facts: Fact[] = [
  {
    text: 'facts.ai.text',
    icon: "🎯"
  },
  {
    text: 'facts.assistant.text',
    icon: "💡"
  },
  {
    text: 'facts.tech.text',
    icon: "✨"
  }
];

const RandomFacts = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % facts.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <FactContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FactText>
            <FactIcon>{facts[currentFact].icon}</FactIcon>
            {t(facts[currentFact].text)}
          </FactText>
        </FactContainer>
      )}
    </AnimatePresence>
  );
};

export default RandomFacts; 