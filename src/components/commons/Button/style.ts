import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../style/theme/util/breakpointsMedia';
import propToStyle from '../../../style/theme/util/propToStyle';

type ButtonComponentProps = {
  ghost?: boolean;
  propStyle?:
    | { [key: string]: string }
    | {
        xs?: { [key: string]: string };
        sm?: { [key: string]: string };
        md?: { [key: string]: string };
        lg?: { [key: string]: string };
        xl?: { [key: string]: string };
      };
};

const ButtonGhost = css`
  color: ${({ theme }) => theme.colors.secondary.main.color};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  background-color: ${({ theme }) => theme.colors.primary.main.color};
`;

export const ButtonComponent = styled.button<ButtonComponentProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};

  ${breakpointsMedia({
    xs: css`
      ${({ theme }) => theme.typographyVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${({ theme }) => theme.typographyVariants.paragraph1}
    `,
  })}

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${({ propStyle }) => propToStyle({ propName: propStyle })}
`;
