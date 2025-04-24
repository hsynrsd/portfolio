import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
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
  }

  [data-theme='light'] {
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
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    background-color: var(--bg-primary) !important;
    position: relative;
    z-index: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
  }

  small, .text-muted {
    color: var(--text-muted);
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