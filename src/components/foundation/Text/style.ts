/* eslint operator-linebreak: off */
import styled, { css } from 'styled-components';
import propToStyle from '../../../style/theme/util/propToStyle';

export const textTypeVariants = {
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph2.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
};

type TextBaseProps = {
  variant: keyof typeof textTypeVariants;
  color?: 'primary' | 'secondary' | 'tertiary';
  lightColor?: boolean;
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

export const TextBase = styled.span<TextBaseProps>`
  ${({ variant }) => textTypeVariants[variant]};
  ${({ propStyle }) => propToStyle({ propName: propStyle })}

  ${({ theme, color, lightColor }) =>
    color &&
    css`
      color: ${theme.colors[color][lightColor ? 'light' : 'main'].color};
    `}
`;
