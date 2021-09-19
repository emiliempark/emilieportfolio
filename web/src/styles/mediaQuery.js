const size = {
  mobile: '450px',
  mobileMax: '449px',
  tablet: '675px',
  desktop: '900px'
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileMax: `(max-width: ${size.mobileMax})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`
};
