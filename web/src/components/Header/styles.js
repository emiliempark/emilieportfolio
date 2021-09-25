import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';
import { contentMaxWidth } from '../../styles/mixins';

const HeaderStyles = styled.header`
  position: relative;
  z-index: 100;
  .wrapper {
    ${contentMaxWidth};
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    @media ${device.mobile} {
      padding: 1.5em 1.5em;
    }
  }

  .branding {
    font-family: 'montserratsemibold', sans-serif;
    flex: 1;

    & a {
      display: inline-block;
      padding: 0.5em;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.colorAccent};
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
          font-family: 'montserratsemibold', sans-serif;
          display: block;
          color: inherit;
          text-decoration: none;
          &:hover {
            color: ${props => props.theme.colorAccent};
          }
        }
      }
    }

    @media ${device.mobileMax} {
      position: absolute;
      background: ${props => props.theme.colorVeryPaleGray};
      color: ${props => props.theme.colorVeryDarkGray};
      box-shadow: 0 3px 0 ${props => props.theme.colorVeryDarkGray};
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
