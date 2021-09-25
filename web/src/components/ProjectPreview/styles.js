import styled from 'styled-components';

const ProjectPreviewStyles = styled.div`
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    position: relative;
    &:hover {
      box-shadow: 3px 3px 0 3px black;
      .leadMediaThumb {
        overflow: hidden;
        & img {
          filter: blur(8px);
          -webkit-filter: blur(8px);
        }
      }
      .textBoxCurtain {
        display: flex;
      }
    }
  }
  .leadMediaThumb {
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
    .textBox {
      text-align: center;
    }
  }
  .title {
    font-family: 'montserratextrabold';
    text-decoration: none;
    color: black;
  }
  .excerpt {
    & p {
      margin: 0.5em 0;
    }

    & strong {
      font-weight: 600;
    }
  }
`;

export default ProjectPreviewStyles;
