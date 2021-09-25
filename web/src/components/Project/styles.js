import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';
const ProjectStyles = styled.article`

.articleHead{
  position: relative;
  background: #e6e6e6;
  padding-bottom: 180px;

  @media ${device.mobile}{
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
      text-align: center;
      color: #f2f2f2;
      font-family: 'montserratextrabold';
      text-shadow: 1px 1px 10px rgba(0,0,0, 0.6);
      @media ${device.mobile}{
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
    &:hover{
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
  h3{
    font-family: 'montserratsemibold';
    font-size: 16px;
  }
  & ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  & a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    padding: 0.25rem 0;
  }
}

.relatedProjectsHeadline {

  margin: 0.5rem 0 0;
`;

export default ProjectStyles;
