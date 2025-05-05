import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation, TranslationKey } from '../translations';
import project1 from '../../public/assets/project1.png';
import project2 from '../../public/assets/project2.png';
import project3 from '../../public/assets/project3.png';

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-primary);
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsDescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.$active ? 'var(--accent-gradient)' : 'var(--card-bg)'};
  color: ${props => props.$active ? '#fff' : 'var(--text-primary)'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 2px solid ${props => props.$active ? 'transparent' : 'var(--card-bg)'};

  &:hover {
    background: ${props => props.$active ? 'var(--accent-gradient)' : 'var(--card-bg)'};
    border-color: var(--accent-color);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.article)`
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectMeta = styled.div`
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: var(--tag-bg);
  color: var(--tag-color);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const StatusBadge = styled.span<{ $status: 'completed' | 'in-progress' }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  background: ${props => props.$status === 'completed' ? 'rgba(0, 255, 135, 0.15)' : 'rgba(255, 170, 0, 0.15)'};
  color: ${props => props.$status === 'completed' ? '#00ff87' : '#ffaa00'};
  border: 1px solid ${props => props.$status === 'completed' ? '#00ff87' : '#ffaa00'};
  backdrop-filter: blur(4px);
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: var(--accent-gradient);
  color: var(--button-text);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  i {
    font-size: 1rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  status: 'completed' | 'in-progress';
  date: string;
  category: string;
}

const Projects = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [filter, setFilter] = useState<string>('all');

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = (date: string, lang: string) => {
    const formattedDate = new Date(date).toLocaleDateString(lang === 'bg' ? 'bg-BG' : 'en-US', {
      year: 'numeric',
      month: 'long'
    });
    return lang === 'bg' ? capitalizeFirstLetter(formattedDate) : formattedDate;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "J.A.R.V.I.S. AI Task Assistant",
      description: "An intelligent task management system powered by machine learning algorithms. Features natural language processing for task understanding and automated task prioritization.",
      image: project1,
      tags: ["React", "TypeScript", "Python", "AI", "OpenRouter", "Flask", "Git", "GitHub", "DeepSeek"],
      githubLink: "https://github.com/hsynrsd/jarvis-ai-assistantv2",
      status: "in-progress",
      date: "2025-05",
      category: "AI"
    },
    {
      id: 2,
      title: "Rental Portal",
      description: "A comprehensive property rental management system with features for property listing, tenant matching, and automated rental agreement generation. Implements secure payment processing and real-time chat.",
      image: project2,
      tags: ["C#", "ASP.NET Core", "MVC", "Razor", "SQL", "Bootstrap", "MsSQL", "Entity Framework", "Git", "GitHub"],
      githubLink: "https://github.com/hsynrsd/RentalPortal",
      status: "completed",
      date: "2025-04",
      category: "Web"
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      description: "A sophisticated movie recommendation system using matrix factorization to generate personalized movie suggestions for 600 users. Achieved high accuracy in predicting user preferences across a small dataset.",
      image: project3,
      tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matrix Factorization", "Collaborative Filtering", "Data Science", "Machine Learning"],
      githubLink: "https://github.com/hsynrsd/movie-recommendation",
      status: "completed",
      date: "2025-05",
      category: "AI"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'other'
      ? projects.filter(project => !['AI', 'Web'].includes(project.category))
      : projects.filter(project => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('projects.title')}
          </ProjectsTitle>
          <ProjectsDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('projects.note')}
          </ProjectsDescription>
        </ProjectsHeader>

        <FilterContainer>
          {['all', 'AI', 'Web', 'Other'].map(category => (
            <FilterButton
              key={category}
              $active={filter === category.toLowerCase()}
              onClick={() => setFilter(category === 'Other' ? 'other' : category)}
            >
              {category === 'all'
                ? t('projects.filter.all')
                : t(`projects.filter.${category.toLowerCase()}` as TranslationKey)
              }
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <StatusBadge $status={project.status}>
                {t(`projects.status.${project.status}` as TranslationKey)}
              </StatusBadge>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectMeta>
                  <i className="fas fa-calendar-alt" />{' '}
                  {formatDate(project.date, language)}
                </ProjectMeta>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagContainer>
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <ProjectLinks>
                  <LinkButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    {t('projects.viewCode')}
                  </LinkButton>
                  {project.demoLink && (
                    <LinkButton href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                      {t('projects.viewDemo')}
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 