import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation, TranslationKey } from '../translations';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: #1a1a1a;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 2rem;
  border-radius: 15px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CategoryTitle = styled.h3`
  color: var(--tag-color);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const SkillLevel = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 400;
  margin-left: 0.5rem;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ProgressBarContainer = styled.div`
  background: ${props => props.theme === 'dark' ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.1)'};
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)<{ $width: number }>`
  height: 100%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border-radius: 4px;
  width: ${props => props.$width}%;
`;

interface SkillCategory {
  category: TranslationKey;
  icon: string;
  items: Array<{
    name: string;
    level: number;
  }>;
}

const skills: SkillCategory[] = [
  {
    category: 'skills.technical',
    icon: "fas fa-laptop-code",
    items: [
      { name: "HTML/CSS/JavaScript", level: 95 },
      { name: "C#", level: 90 },
      { name: "ASP.NET Core/MVC/Razor", level: 90 },
      { name: ".NET Framework", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "TypeScript", level: 60 },
      { name: "React", level: 50 },
      { name: "RESTful APIs", level: 85 },
      { name: "SOLID Principles", level: 80 },
      { name: "Design Patterns", level: 75 }
    ]
  },
  {
    category: 'skills.tools',
    icon: "fas fa-tools",
    items: [
      { name: "Visual Studio", level: 90 },
      { name: "Visual Studio Code", level: 90 },
      { name: "SQL Server Management Studio", level: 85 },
      { name: "Git", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Azure Data Studio", level: 75 },
      { name: "Swagger/OpenAPI", level: 80 }
    ]
  },
  {
    category: 'skills.soft',
    icon: "fas fa-brain",
    items: [
      { name: "Problem-Solving", level: 90 },
      { name: "Critical Thinking", level: 85 },
      { name: "Time Management", level: 85 },
      { name: "Adaptability", level: 85 },
      { name: "Organization", level: 85 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 85 },
      { name: "Agile/Scrum", level: 80 }
    ]
  }
] as const;

const Skills = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </SectionTitle>
        
        <SkillsGrid>
          {skills.map((category, index) => (
            <SkillCategory
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>
                <i className={category.icon}></i>
                {t(category.category)}
              </CategoryTitle>
              
              {category.items.map((skill, skillIndex) => (
                <SkillItem key={skill.name}>
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <ProgressBarContainer>
                    <ProgressBar
                      $width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </ProgressBarContainer>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 