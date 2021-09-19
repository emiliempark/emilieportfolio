import React from "react";
import Header from "../header";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {GlobalStyles, theme, ContentStyles} from './styles';

import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <ThemeProvider theme={theme}>
  <GlobalStyles />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <ContentStyles>{children}</ContentStyles>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </ThemeProvider>
);

export default Layout;
