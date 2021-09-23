import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';

const ContainerStyles = styled.div`
  box-sizing: border-box;
  max-width: 1280px;
  padding: 1.5em;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 2em;
  }
`;

export default ContainerStyles;
