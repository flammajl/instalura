import {
  css,
  DefaultTheme,
  Interpolation,
  ThemeProps,
} from 'styled-components';
import theme from '../../theme';

const { breakpoints } = theme;

interface cssBreakpointsProps {
  xs?: Interpolation<ThemeProps<DefaultTheme>>;
  sm?: Interpolation<ThemeProps<DefaultTheme>>;
  md?: Interpolation<ThemeProps<DefaultTheme>>;
  lg?: Interpolation<ThemeProps<DefaultTheme>>;
  xl?: Interpolation<ThemeProps<DefaultTheme>>;
}

const breakpointsMedia = (cssBreakpoints: cssBreakpointsProps) => {
  const breakpointsNames = Object.keys(breakpoints);

  return breakpointsNames.map(
    breakpointsName => css`
      @media only screen and (min-width: ${breakpoints[breakpointsName]}px) {
        ${cssBreakpoints[breakpointsName]}
      }
    `,
  );
};

export default breakpointsMedia;
