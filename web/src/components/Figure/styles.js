import styled from 'styled-components';

const ImageContainer = styled.figure`
  margin: 0;
  & > div {
    // gatsby set display: inline-block; which creates gap between images
    display: block !important;
  }
  & figcaption {
    font-size: ${props => props.theme['font-small-size']};
    line-height: ${props => props.theme['font-small-line-height']};
    margin: 0 0;
  }
`;

export default ImageContainer;