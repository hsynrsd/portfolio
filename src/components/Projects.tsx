import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 0.75rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  @media (hover: none) {
    transform: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.5em;
    line-height: 1;
  }

  @media (max-width: 480px) {
    gap: 0.35rem;
    
    span {
      font-size: 1.3em;
    }
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: clamp(0.9rem, 1.1vw, 1.1rem);
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const Projects = () => {
  const projects = [
    {
      emoji: "🎯",
      title: "Rental Portal",
      description: "Your one-stop shop for finding the perfect space, whether it's your dream home or the ideal office. Built with a focus on user experience and powerful search capabilities, this platform makes property hunting feel like a breeze. No more endless scrolling through listings that don't match your vibe."
    },
    {
      emoji: "🤖",
      title: "Jarvis AI Assistant",
      description: "Move over, Siri – there's a new AI in town. Inspired by Iron Man's trusty sidekick, this assistant brings the future to your fingertips. Voice commands, smart responses, and a personality that won't make you want to throw your device out the window. Because who doesn't want their own JARVIS?"
    },
    {
      emoji: "🎬",
      title: "Movie Recommendation System",
      description: "Tired of spending more time picking a movie than actually watching it? This smart system uses matrix factorization to understand your taste better than your best friend. It's like having a movie buddy who actually knows what you'll enjoy – no more disappointing recommendations!"
    }
  ];

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectTitle>
                <span>{project.emoji}</span>
                {project.title}
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects; 