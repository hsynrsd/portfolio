import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ccc;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 2rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: #00ff87;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Build Something Awesome Together! 🚀
        </ContactTitle>
        <ContactText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to geek out about code, AI, or the next big thing in tech? 
          Let's connect and maybe build something that'll make people say "wow"!
        </ContactText>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink href="https://github.com/hsynrsd" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/huseyin-rashid-356025349/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="liiq." target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </SocialLink>
        </SocialLinks>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 