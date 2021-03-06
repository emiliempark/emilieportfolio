import styled, { createGlobalStyle } from 'styled-components';
import { device } from '../../styles/mediaQuery';
import { contentMaxWidth } from '../../styles/mixins';
import montserrantExtrabold from '../../fonts/montserrat-extrabold-webfont.woff';
import montserrantExtrabold2 from '../../fonts/montserrat-extrabold-webfont.woff2';
import montserrantSemibold from '../../fonts/montserrat-semibold-webfont.woff';
import montserrantSemibold2 from '../../fonts/montserrat-semibold-webfont.woff2';
import montserrantRegular from '../../fonts/montserrat-regular-webfont.woff';
import montserrantRegular2 from '../../fonts/montserrat-regular-webfont.woff2';

export const theme = {
  fontFamilySans: '-apple-system, BlinkMacSystemFont, sans-serif',

  colorBlack: '#202123',
  colorVeryDarkGray: '#32373e',
  colorGray: '#697a90',
  colorLightGray: '#b4bcc7',
  colorVeryLightGray: '#e7ebed',
  colorVeryPaleGray: '#f2f2f2',
  colorWhite: '#fff',
  colorAccent: '#156dff',

  /* Typography */
  unit: 16,
  fontMicroSize: '10px' /* 10px */,
  get fontMicroLineHeight() {
    return 12 / 10;
  } /* 12px */,
  fontSmallSize: '14px' /* 14px */,
  get fontSmallLineHeight() {
    return 21 / this.unit;
  } /* 21px */,
  fontBaseSize: '1em' /* 16px */,
  get fontBaseLineHeight() {
    return 24 / this.unit;
  } /* 24px */,
  fontLargeSize: '18px',
  get fontLargeLineHeight() {
    return 27 / 18;
  } /* 27px */,
  fontTitle3Size: '21px',
  get fontTitle3LineHeight() {
    return 30 / 21;
  } /* 30px */,
  fontTitle2Size: '24px' /* calc(24 / var('unit) * 1rem) */,
  get fontTitle2LineHeight() {
    return 33 / 24;
  } /* 33px */,
  fontTitlte1Size: '49px',
  get fontTitle1LineHeight() {
    return 57 / 49;
  } /* 57px */
};

export const GlobalStyles = createGlobalStyle`

  @font-face {
      font-family: 'montserratextrabold';
      src: url(${montserrantExtrabold2}) format('woff2'),
          url(${montserrantExtrabold}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserratsemibold';
      src: url(${montserrantSemibold2}) format('woff2'),
          url(${montserrantSemibold}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserratregular';
      src: url(${montserrantRegular2}) format('woff2'),
          url(${montserrantRegular}) format('woff');
      font-weight: normal;
      font-style: normal;
  }


  html {
    font-family: ${props => props.theme.fontFamilySans};
    font-size: ${props => props.theme.unit};
    line-height: ${props => 24 / props.theme.unit}; /* 24px */
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background-color: ${props => props.theme.colorVeryPaleGray};
  }
  
  html,
  body,
  body > div,
  body > div > div {
    /* height: 100%; */
    font-family: 'montserratregular';
  }
  h1,h2,h3,h4{
      font-family: 'montserratextrabold';
    }
    h1{}
    h2{}
    h3{}
    h4{}
    p{}
    strong{}
    em{}

  article{
    h1,h2,h3,h4{
      font-family: 'montserratsemibold';
    }
    h1{}
    h2{}
    h3{}
    h4{}
    p{}
    strong{}
    em{}
  }
`;

export const ContentStyles = styled.div`
  // 100% - <header height> - <footer height>
  min-height: calc(100% - 73px - 120px);

  @media ${device.mobile} {
    // 100% - <header height> - <footer height>
    min-height: calc(100% - 88px - 150px);
  }
`;

export const FooterStyles = styled.footer`
  /* border-top: 1px solid ${props => props.theme.colorLightGray}; */
  & a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colorAccent};
    }
  }
  .footerWrapper {
    ${contentMaxWidth};
    padding-top: 1em;
    padding-bottom: 1em;
    @media ${device.mobile} {
    }

    .siteInfo {
      text-align: center;
      font-size: ${props => props.theme.fontSmallSize};
      line-height: ${props => props.theme.fontSmallLineHeight};
    }
  }
`;
