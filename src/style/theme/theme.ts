import colors from './colors';
import typographyVariants from './typographyVariants';

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

const theme = {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: "'Rubick', sans-serif",
};

export default theme;
