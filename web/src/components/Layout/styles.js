import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    font-family: ${props => props.theme['font-family-sans']};
    font-size: ${props => props.theme['unit']};
    line-height: ${props => 24 / props.theme['unit']}; /* 24px */
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

export const theme = {
  'font-family-sans': '-apple-system, BlinkMacSystemFont, sans-serif',

  'color-black': '#202123',
  'color-dark-gray': '#32373e',
  'color-gray': '#697a90',
  'color-light-gray': '#b4bcc7',
  'color-very-light-gray': '#e7ebed',
  'color-white': '#fff',
  'color-accent': '#156dff',

  /* Typography */
  unit: 16,
  'font-micro-size': '10px' /* 10px */,
  // 'font-micro-line-height': calc(12 / 10); /* 12px */
  'font-small-size': '14px' /* 14px */,
  'font-small-line-height': '21px' /* 21px */,
  // 'font-base-size': 1em; /* 16px */
  // 'font-base-line-height': calc(24 / var('unit)); /* 24px */
  // 'font-large-size': calc(18 / var('unit) * 1rem); /* 18px */
  // 'font-large-line-height': calc(27 / 18); /* 27px */

  // 'font-title3-size': calc(21 / var('unit) * 1rem); /* 21px */
  // 'font-title3-line-height': calc(30 / 21); /* 30px */
  // 'font-title2-size': calc(24 / var('unit) * 1rem); /* 24px */
  // 'font-title2-line-height': calc(33 / 24); /* 33px */
  // 'font-title1-size': calc(49 / var('unit) * 1rem); /* 49px */
  // 'font-title1-line-height': calc(57 / 49); /* 57px */

  'media-min-small': 450,
  'media-max-small': 449,
  'media-min-medium': 675,
  'media-min-large': 900
};

export const ContentStyles = styled.div`
  background: ${props => props.theme['color-white']};
  min-height: calc(100% - 73px - 120px);

  @media (min-width: ${props => props.theme['media-min-small'] + 'px'}) {
    min-height: calc(100% - 88px - 150px);
  }
`;

export const FooterStyles = styled.footer`
  border-top: 1px solid ${props => props.theme['color-very-light-gray']};
  & a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme['color-accent']};
    }
  }
  .footerWrapper {
    box-sizing: border-box;
    max-width: 960px;
    padding: 4.5em 1.5em 1.5em;
    margin: 0 auto;

    @media (min-width: ${props => props.theme['media-min-small'] + 'px'}) {
      padding: 6em 2em 2em;
    }
  }
  .companyAddress {
    text-align: center;
    margin: 0 0 1rem;
  }

  .siteInfo {
    text-align: center;
    font-size: ${props => props.theme['font-small-size']};
    line-height: ${props => props.theme['font-small-line-height']};
  }
`;
