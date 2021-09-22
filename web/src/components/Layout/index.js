import React from 'react';
import Header from '../Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme, ContentStyles, FooterStyles } from './styles';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <ContentStyles>{children}</ContentStyles>
    <FooterStyles>
      <div className="footerWrapper">
        <div className="siteInfo">© {new Date().getFullYear()}, Emilie Park</div>
      </div>
    </FooterStyles>
  </ThemeProvider>
);

export default Layout;
