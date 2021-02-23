import { AnchorHTMLAttributes } from 'react';
import { TextBase, textTypeVariants } from './style';

interface TextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tag?: 'span' | 'p' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'primary' | 'secondary' | 'tertiary';
  lightColor?: boolean;
  variant: keyof typeof textTypeVariants;
  propStyle?:
    | { [key: string]: string }
    | {
        xs?: { [key: string]: string };
        sm?: { [key: string]: string };
        md?: { [key: string]: string };
        lg?: { [key: string]: string };
        xl?: { [key: string]: string };
      };
}

const Text: React.FC<TextProps> = ({
  children,
  tag = 'span',
  variant,
  color,
  lightColor,
  propStyle,
  ...rest
}) => (
  <TextBase
    as={tag}
    variant={variant}
    propStyle={propStyle}
    color={color}
    lightColor={lightColor}
    {...rest}
  >
    {children}
  </TextBase>
);

export default Text;
