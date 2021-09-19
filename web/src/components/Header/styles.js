import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';

const HeaderStyles = styled.header`
  position: relative;
  z-index: 100;
  .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 960px;
    padding: 1em;
    display: flex;
    @media ${device.mobile} {
      padding: 1.5em 1.5em;
    }
  }

  .branding {
    font-weight: 600;
    flex: 1;

    & a {
      display: inline-block;
      padding: 0.5em;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: ${props => props.theme['color-accent']};
      }
    }
  }
  .toggleNavButton {
    appearance: none;
    font-size: 25px;
    border: none;
    background: none;
    margin: 0;
    padding: calc(14 / 17 / 2 * 1rem);
    outline: none;
    color: inherit;

    & svg {
      display: block;
      fill: inherit;
    }

    @media ${device.mobile} {
      display: none;
    }
  }
  .nav {
    display: none;

    & ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        a {
          display: block;
          color: inherit;
          text-decoration: none;
          &:hover {
            color: ${props => props.theme['color-accent']};
          }
        }
      }
    }

    @media ${device.mobileMax} {
      position: absolute;
      background: ${props => props.theme['color-white']};
      color: ${props => props.theme['color-black']};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      left: 0;
      right: 0;
      top: 4.3rem;

      & ul {
        padding: 1rem 0;
      }

      & ul li a {
        padding: 0.5rem 1.5rem;
      }
    }

    @media ${device.mobile} {
      & {
        display: block;
        position: relative !important;
      }

      & ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }

      & ul li a {
        padding: 0.5rem;
      }
    }
  }
  .showNav {
    display: block;
  }
`;

export default HeaderStyles;
