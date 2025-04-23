import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background: #1a1a1a;
  color: white;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00ff87;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Tech Stack",
      skills: [
        "Full Stack Development",
        "C# Mastery",
        "Database Design & Optimization",
        "AI/ML Implementation",
        "System Architecture"
      ]
    },
    {
      title: "🛠️ What I Bring to the Table",
      skills: [
        "Problem-solving that would make Sherlock proud",
        "Clean, maintainable code that other devs actually want to work with",
        "A knack for turning complex problems into elegant solutions",
        "Passion for automation and efficiency",
        "Quick learner who's always up for a challenge"
      ]
    }
  ];

  return (
    <SkillsContainer>
      <SkillsContent>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills; 