import React from "react";
import Header from "../header";
import { ThemeProvider } from 'styled-components';
import {GlobalStyles, theme, ContentStyles, FooterStyles} from './styles';


const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <ThemeProvider theme={theme}>
  <GlobalStyles />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <ContentStyles>{children}</ContentStyles>
    <FooterStyles>
      <div className="footerWrapper">
        <div className="siteInfo">
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </FooterStyles>
  </ThemeProvider>
);

export default Layout;
