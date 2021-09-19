import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Div = styled.div`
background-color: silver
`;
const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <Div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </Div>
);

export default Header;
