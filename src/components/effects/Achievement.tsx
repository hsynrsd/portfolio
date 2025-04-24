import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation, TranslationKey } from '../../translations';

const AchievementContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1000;
  max-width: 300px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0.25rem 0 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

interface Achievement {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: string;
  threshold: number;
}

const achievements: Achievement[] = [
  {
    id: 'intro',
    titleKey: 'achievement.welcome.title',
    descKey: 'achievement.welcome.desc',
    icon: '🚀',
    threshold: 0
  },
  {
    id: 'scroll25',
    titleKey: 'achievement.curious.title',
    descKey: 'achievement.curious.desc',
    icon: '🔍',
    threshold: 25
  },
  {
    id: 'scroll50',
    titleKey: 'achievement.halfway.title',
    descKey: 'achievement.halfway.desc',
    icon: '🌟',
    threshold: 50
  },
  {
    id: 'scroll75',
    titleKey: 'achievement.deep.title',
    descKey: 'achievement.deep.desc',
    icon: '💫',
    threshold: 75
  },
  {
    id: 'scroll100',
    titleKey: 'achievement.master.title',
    descKey: 'achievement.master.desc',
    icon: '🎊',
    threshold: 100
  }
];

interface AchievementProps {
  onComplete?: () => void;
}

const Achievement = ({ onComplete }: AchievementProps) => {
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    const checkScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / windowHeight) * 100;

      const nextAchievement = achievements.find(achievement => 
        achievement.threshold <= scrollPercentage && 
        !unlockedAchievements.has(achievement.id)
      );

      if (nextAchievement) {
        setCurrentAchievement(nextAchievement);
        setUnlockedAchievements(prev => new Set([...prev, nextAchievement.id]));
        
        setTimeout(() => {
          setCurrentAchievement(null);
          onComplete?.();
        }, 3000);
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', checkScroll);
  }, [unlockedAchievements, onComplete]);

  return (
    <AnimatePresence>
      {currentAchievement && (
        <AchievementContainer
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
        >
          <IconWrapper>
            {currentAchievement.icon}
          </IconWrapper>
          <Content>
            <Title>{t(currentAchievement.titleKey)}</Title>
            <Description>{t(currentAchievement.descKey)}</Description>
          </Content>
        </AchievementContainer>
      )}
    </AnimatePresence>
  );
};

export default Achievement; 