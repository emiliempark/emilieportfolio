import styled from 'styled-components';

const ImageContainer = styled.figure`
  margin: 0;
  & > div {
    // gatsby set display: inline-block; which creates gap between images
    display: block !important;
  }
  & figcaption {
    font-size: ${props => props.theme.fontSmallSize};
    line-height: ${props => props.theme.fontSmallLineHeight};
    margin: 0 0;
  }
`;

export default ImageContainer;
