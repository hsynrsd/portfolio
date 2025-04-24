import { Global, css } from '@emotion/react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import FloatingContact from './components/FloatingContact';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import Achievement from './components/effects/Achievement';
import RandomFacts from './components/effects/RandomFacts';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800&display=swap');

  :root {
    /* Dark theme (default) */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-muted: #999999;
    --accent-gradient: linear-gradient(45deg, #00ff87, #60efff);
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.1);
    --nav-bg: rgba(26, 26, 26, 0.95);
    --card-hover: rgba(255, 255, 255, 0.1);
    --tag-bg: rgba(0, 255, 135, 0.1);
    --tag-color: #00ff87;
    --button-text: #1a1a1a;
    --border-color: rgba(255, 255, 255, 0.1);
    --input-bg: rgba(255, 255, 255, 0.05);

    /* Responsive font sizes */
    --fs-xxl: clamp(2.5rem, 5vw, 3.5rem);
    --fs-xl: clamp(2rem, 4vw, 3rem);
    --fs-lg: clamp(1.5rem, 3vw, 2rem);
    --fs-md: clamp(1rem, 2vw, 1.25rem);
    --fs-sm: clamp(0.875rem, 1.5vw, 1rem);
    --fs-xs: clamp(0.75rem, 1vw, 0.875rem);

    /* Spacing variables */
    --spacing-xxl: clamp(4rem, 8vw, 6rem);
    --spacing-xl: clamp(3rem, 6vw, 4rem);
    --spacing-lg: clamp(2rem, 4vw, 3rem);
    --spacing-md: clamp(1.5rem, 3vw, 2rem);
    --spacing-sm: clamp(1rem, 2vw, 1.5rem);
    --spacing-xs: clamp(0.5rem, 1vw, 1rem);

    /* Container max-widths */
    --container-xl: 1400px;
    --container-lg: 1200px;
    --container-md: 992px;
    --container-sm: 768px;
    --container-xs: 576px;
  }

  [data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --text-primary: #2d2d2d;
    --text-secondary: #4a4a4a;
    --text-muted: #666666;
    --accent-gradient: linear-gradient(45deg, #00b85f, #0099ff);
    --card-bg: rgba(0, 0, 0, 0.02);
    --card-border: rgba(0, 0, 0, 0.1);
    --nav-bg: rgba(255, 255, 255, 0.95);
    --card-hover: rgba(0, 0, 0, 0.05);
    --tag-bg: rgba(0, 184, 95, 0.1);
    --tag-color: #00884d;
    --button-text: #ffffff;
    --border-color: rgba(0, 0, 0, 0.1);
    --input-bg: rgba(0, 0, 0, 0.02);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;

    @media (max-width: 1200px) {
      font-size: 15px;
    }

    @media (max-width: 992px) {
      font-size: 14px;
    }

    @media (max-width: 576px) {
      font-size: 13px;
    }
  }

  body {
    font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    padding: var(--spacing-xxl) var(--spacing-md);
    background-color: var(--bg-primary) !important;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: var(--spacing-xl) var(--spacing-sm);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    line-height: 1.3;
  }

  h1 { font-size: var(--fs-xxl); }
  h2 { font-size: var(--fs-xl); }
  h3 { font-size: var(--fs-lg); }
  h4 { font-size: var(--fs-md); }
  h5 { font-size: var(--fs-sm); }
  h6 { font-size: var(--fs-xs); }

  p {
    color: var(--text-secondary);
    font-size: var(--fs-md);
    margin-bottom: var(--spacing-sm);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
  }

  /* Container classes */
  .container {
    width: 100%;
    max-width: var(--container-lg);
    margin: 0 auto;
    padding: 0 var(--spacing-sm);

    @media (max-width: 1200px) {
      max-width: var(--container-md);
    }

    @media (max-width: 992px) {
      max-width: var(--container-sm);
    }

    @media (max-width: 768px) {
      max-width: var(--container-xs);
    }

    @media (max-width: 576px) {
      padding: 0 var(--spacing-xs);
    }
  }

  /* Grid system */
  .grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(12, 1fr);

    @media (max-width: 992px) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  /* Utility classes */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .d-none { display: none; }
  .d-block { display: block; }
  .d-flex { display: flex; }
  .d-grid { display: grid; }

  @media (max-width: 992px) {
    .d-lg-none { display: none; }
    .d-lg-block { display: block; }
  }

  @media (max-width: 768px) {
    .d-md-none { display: none; }
    .d-md-block { display: block; }
  }

  @media (max-width: 576px) {
    .d-sm-none { display: none; }
    .d-sm-block { display: block; }
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .fade-in {
    animation: fadeIn 0.5s ease forwards;
  }

  .slide-up {
    animation: slideUp 0.5s ease forwards;
  }

  /* Project cards */
  .project-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
  }

  /* Tags */
  .tag {
    background: var(--tag-bg);
    color: var(--tag-color);
  }

  /* Buttons */
  .gradient-button {
    background: var(--accent-gradient);
    color: var(--button-text);
  }

  /* Status badges */
  .status-badge {
    background: var(--tag-bg);
    color: var(--tag-color);
  }

  /* Links */
  a {
    color: var(--text-secondary);
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--tag-color);
  }

  /* Add smooth transitions for theme changes */
  * {
    transition: background-color 0.3s ease, 
                color 0.3s ease, 
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }
`;

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <Global styles={GlobalStyles} />
          <AppContainer>
            <ParticlesBackground />
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <ThemeToggle />
            <LanguageToggle />
            <FloatingContact />
            <BackToTop />
            <Achievement />
            <RandomFacts />
            <MainContent>
              <Routes>
                <Route path="/" element={<Navigate to="/en" replace />} />
                <Route path="/:lang" element={
                  <>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Contact />
                  </>
                } />
              </Routes>
            </MainContent>
          </AppContainer>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;
