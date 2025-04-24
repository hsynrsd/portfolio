import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

const ContactSection = styled.section`
  padding: 6rem 2rem 3rem;
  background: var(--bg-primary);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactTitle = styled.h2`
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContactDescription = styled.p`
  color: var(--text-muted);
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--input-bg);
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &::placeholder {
    color: var(--text-muted);
    font-weight: 400;
  }
`;

const TextArea = styled(Input.withComponent('textarea'))`
  min-height: 150px;
  resize: vertical;
  line-height: 1.5;
`;

const SubmitButton = styled(motion.button)`
  background: var(--accent-gradient);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  
  i {
    font-size: 1.5rem;
    color: var(--tag-color);
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  p {
    color: var(--text-secondary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--tag-color);
    transform: translateY(-3px);
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  color: var(--text-primary);
  text-align: center;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--tag-color);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  margin: 0 auto 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 255, 135, 0.1);
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  i {
    color: var(--tag-color);
    font-size: 0.9rem;
  }
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        if (result.text === 'OK') {
          setSuccess(true);
          if (form.current) {
            form.current.reset();
          }
          setTimeout(() => setSuccess(false), 5000);
        }
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <AnimatePresence>
        {success && (
          <SuccessMessage
            initial={{ opacity: 0, y: -100 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.7
              }
            }}
            exit={{ 
              opacity: 0, 
              y: -100,
              transition: {
                duration: 0.3
              }
            }}
          >
            <i className="fas fa-check-circle"></i>
            {t('contact.success')}
          </SuccessMessage>
        )}
      </AnimatePresence>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </SectionTitle>
        <ContactTitle>{t('contact.title')}</ContactTitle>
        <ContactDescription>{t('contact.subtitle')}</ContactDescription>
        
        <ContactGrid>
          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FormGroup>
              <Label htmlFor="from_name">{t('contact.name')}</Label>
              <Input
                type="text"
                id="from_name"
                name="from_name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="from_email">{t('contact.email')}</Label>
              <Input
                type="email"
                id="from_email"
                name="from_email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">{t('contact.message')}</Label>
              <TextArea
                id="message"
                name="message"
                required
              />
            </FormGroup>
            {error && <ErrorMessage>{t('contact.error')}</ErrorMessage>}
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <InfoItem>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>{t('contact.email')}</h3>
                <p>hsynrsdd@gmail.com</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>{t('contact.location')}</h3>
                <p>{t('contact.location.value')}</p>
              </div>
            </InfoItem>
            <SocialLinks>
              <SocialLink 
                href="https://github.com/hsynrsd" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('social.github')}
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/huseyin-rashid-356025349/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('social.linkedin')}
              >
                <i className="fab fa-linkedin"></i>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 