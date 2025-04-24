import { motion, useScroll, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MatrixRain from './effects/MatrixRain';
import Sparkles from './effects/Sparkles';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation, TranslationKey } from '../translations';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-sm);
    min-height: 100vh;
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--accent-gradient-start) 0%, transparent 50%);
    pointer-events: none;
    opacity: 0.1;
    animation: gradientPulse 8s ease-in-out infinite;
  }

  @keyframes gradientPulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.15; }
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: var(--container-lg);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-lg);
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    max-width: 90%;
    gap: var(--spacing-md);
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: var(--container-sm);
    text-align: center;
    gap: var(--spacing-md);
  }

  @media (max-width: 576px) {
    gap: var(--spacing-sm);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 700px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 0.5s;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 992px) {
    order: 2;
    margin: 0 auto;
    gap: var(--spacing-sm);
  }
`;

const Tagline = styled(motion.h1)`
  font-size: var(--fs-xxl);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--spacing-sm);
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  white-space: pre-line;
  animation: gradient 8s ease infinite;
  letter-spacing: -0.02em;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.3rem, 4vw, 1.8rem);
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: var(--fs-md);
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  letter-spacing: 0.01em;

  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
    margin-bottom: 1.5rem;
  }
`;

const TechStack = styled(motion.div)`
  display: flex;
  gap: var(--spacing-sm);
  margin: var(--spacing-sm) 0;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const TechTag = styled(motion.div)`
  background: var(--tag-bg);
  color: var(--tag-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 20px;
  font-size: var(--fs-sm);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: var(--accent-gradient);
    color: var(--text-primary);
  }

  .tooltip {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--card-bg);
    color: var(--text-primary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 8px;
    font-size: var(--fs-xs);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    z-index: 10;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: var(--card-bg);
    }
  }

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -45px;
  }
`;

const AboutSection = styled(motion.div)`
  font-size: clamp(0.95rem, 1.1vw, 1.2rem);
  line-height: 1.7;
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: 0.01em;

  p {
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--text-primary);
    }
    
    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 2;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 240px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 576px) {
    max-width: 160px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: var(--accent-gradient);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: var(--bg-primary);
    z-index: -2;
    border-radius: 25px;
  }

  &:hover::before {
    opacity: 0.7;
    transform: scale(1.02);
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: flex-start;

  @media (max-width: 992px) {
    justify-content: center;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const SocialLink = styled.a`
  color: #ccc;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ff87;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid #00ff87;
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 2s;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background: var(--accent-gradient);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { transform: scaleY(1); opacity: 1; }
    50% { transform: scaleY(0.7); opacity: 0.7; }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0.1;
`;

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const Hero = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [isVisible, setIsVisible] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [sparklePoints, setSparklePoints] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTechTagClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSparklePoints(prev => [...prev, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }]);

    // Remove sparkle after animation
    setTimeout(() => {
      setSparklePoints(prev => prev.slice(1));
    }, 1000);
  };

  const techStack = [
    { name: 'Python', proficiency: 'Machine Learning & Data Analysis' },
    { name: 'AI/ML', proficiency: 'Neural Networks & Deep Learning' },
    { name: 'C#', proficiency: '.NET Development & Desktop Apps' },
  ];

  return (
    <HeroContainer>
      <MatrixRain />
      <ParticleContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </ParticleContainer>
      <HeroContent>
        <TextContent>
          <Tagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.tagline')}
          </Tagline>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                t('hero.role.1'),
                2000,
                t('hero.role.2'),
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
            {t('hero.subtitle.rest')}
          </Subtitle>
          <TechStack
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {techStack.map((tech, index) => {
              let techKey: TranslationKey = 'tech.python';
              if (tech.name === 'Python') techKey = 'tech.python';
              else if (tech.name === 'AI/ML') techKey = 'tech.aiml';
              else if (tech.name === 'C#') techKey = 'tech.csharp';

              return (
                <TechTag
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleTechTagClick}
                >
                  {tech.name}
                  <div className="tooltip">{t(techKey)}</div>
                </TechTag>
              );
            })}
          </TechStack>
          <AboutSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>{t('hero.intro')}</p>
            <p>{t('hero.current')}</p>
            <p>{t('hero.connect')}</p>
          </AboutSection>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SocialLink 
              href="https://github.com/hsynrsd" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t('social.github')}
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/huseyin-rashid-356025349/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t('social.linkedin')}
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </SocialLink>
            <SocialLink 
              href="mailto:hsynrsdd@gmail.com"
              aria-label={t('social.email')}
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </SocialLink>
          </SocialLinks>
        </TextContent>
        <ProfileImageContainer
          style={{ y }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ProfileImage
            src="src/assets/profile.png"
            alt="Huseyin Rashid - Software Developer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x400?text=HR';
            }}
          />
        </ProfileImageContainer>
      </HeroContent>
      {sparklePoints.map((point, i) => (
        <Sparkles
          key={i}
          x={point.x}
          y={point.y}
          color="var(--accent-color)"
          onComplete={() => {
            setSparklePoints(prev => prev.filter((_, index) => index !== i));
          }}
        />
      ))}
      {isVisible && (
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {t('hero.scroll')}
        </ScrollIndicator>
      )}
    </HeroContainer>
  );
};

export default Hero; 