import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';
const ProjectStyles = styled.article`
  .articleHead {
    position: relative;
    background: #e6e6e6;
    padding-bottom: 180px;

    @media ${device.mobile} {
      padding-bottom: 250px;
    }

    & > .articleHeadImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      background-position: center;
      background-size: cover;
      & > .title {
        display: flex;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        justify-content: center;
        align-items: center;
        color: #f2f2f2;
        font-family: 'montserratextrabold';
        text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
        @media ${device.mobile} {
          font-size: 40px;
        }
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
  }

  .mainContent {
    & a {
      color: ${props => props.theme.colorAccent};
      &:hover {
        color: inherit;
      }
    }
  }

  .metaContent {
  }

  .publishedAt {
    margin: 1.5rem 0 3rem;
    color: var(--color-gray);
  }

  .categories {
    border-top: 1px solid var(--color-very-light-gray);
    margin: 2rem 0 3rem;

    & ul {
      list-style: none;
      margin: 0.75rem 0;
      padding: 0;
    }

    & ul li {
      padding: 0.25rem 0;
    }
  }

  .categoriesHeadline {
    margin: 0.5rem 0 0;
  }

  .relatedProjects {
    border-top: 1px solid ${props => props.theme.colorLightGray};
    margin: 2rem 0 3rem;

    h3.relatedProjectsHeadline {
      font-family: 'montserratsemibold';
      font-size: 16px;
      margin: 0.5rem 0 0;
    }
    & ul {
      list-style: none;
      margin: 0.75rem 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2em;
      @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media ${device.desktop} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      li {
        width: 100%;
        a {
          position: relative;
          display: block;
          color: inherit;
          text-decoration: none;
          padding: 0.25rem 0;
          &:hover {
            box-shadow: 10px 10px 0 -3px black;
            .textBoxCurtain {
              display: flex;
            }
          }
          .imageWrapper {
            position: relative;
            padding-bottom: 100%;
            background: #eee;
            & img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .textBoxCurtain {
            display: none;
            position: absolute;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border: 3px solid black;
            text-align: center;
            font-family: 'montserratsemibold';
            font-size: 16px;
            backdrop-filter: blur(5px);
          }
        }
      }
    }
  }
`;

export default ProjectStyles;
