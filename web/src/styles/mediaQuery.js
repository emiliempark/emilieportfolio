// import { css } from 'styled-components';

const breakpoints = {
  mobile: '450px',
  mobileMax: '449px',
  tablet: '675px',
  desktop: '900px'
};

export const device = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  mobileMax: `(max-width: ${breakpoints.mobileMax})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`
};

/**
 * this method is handy when extending breakpoint however the syntax doesn't highlight.
 */
// export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
//   accumulator[label] = (...args) => css`
//     @media (min-width: ${breakpoints[label]}) {
//       ${css(...args)};
//     }
//   `;
//   return accumulator;
// }, {});
