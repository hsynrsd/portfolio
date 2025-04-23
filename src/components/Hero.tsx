import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    min-height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 135, 0.1) 0%, transparent 50%);
    pointer-events: none;
    animation: gradientFade 2s ease-in-out;
  }

  @keyframes gradientFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    max-width: 90%;
    gap: 2rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    text-align: center;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 700px;

  @media (max-width: 992px) {
    order: 2;
    margin: 0 auto;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Tagline = styled(motion.h1)`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  white-space: pre-line;
  animation: gradient 8s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 480px) {
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
`;

const AboutSection = styled(motion.div)`
  font-size: clamp(0.95rem, 1.1vw, 1.2rem);
  line-height: 1.6;
  color: #ccc;

  p {
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #fff;
    }
    
    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.7;
  }

  @media (max-width: 992px) {
    order: 1;
    max-width: 240px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 160px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  object-fit: cover;
  aspect-ratio: 1;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: flex-start;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
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
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextContent>
          <Tagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {"Turning complex problems into\nelegant solutions |\nBuilding the future,\none line of code at a time"}
          </Tagline>
          <AboutSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Hey there! 👋 I'm Huseyin, a developer who's obsessed with making things work smarter, not harder. 
              When I'm not coding, you'll find me building AI assistants that would make Tony Stark proud or 
              creating systems that actually understand what you want (no mind reading required, promise!).
            </p>
            <p>
              I'm all about that sweet spot where innovation meets practicality. Whether it's revolutionizing 
              how we find our next home or making movie recommendations that don't suggest "The Room" when 
              you're looking for Oscar winners, I'm here to make tech work for humans, not the other way around.
            </p>
            <p>
              Currently leveling up my skills as a student, but don't let that fool you – I'm building 
              projects that pack a punch. Let's connect and maybe build something awesome together! 🚀
            </p>
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
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/huseyin-rashid-356025349/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </SocialLink>
            <SocialLink 
              href="mailto:hsynrsdd@gmail.com"
              aria-label="Email Contact"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </SocialLink>
          </SocialLinks>
        </TextContent>
        <ProfileImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ProfileImage 
            src="/src/profile.png" 
            alt="Huseyin Rashid - Software Developer"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x400?text=HR';
            }}
          />
        </ProfileImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 