import { createGlobalStyle, css } from 'styled-components';

const unit = 16;

export const GlobalStyles = createGlobalStyle`

  html {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;;
    font-size: 1em;
    line-height: calc(24 / ${unit}); /* 24px */
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }
  
  html,
  body,
  body > div,
  body > div > div {
    height: 100%;
  }
  
`;

export const theme = css`
`;