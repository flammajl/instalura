import { AnchorHTMLAttributes } from 'react';
import { TextBase, textTypeVariants } from './style';

interface TextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tag?: 'span' | 'p' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant: keyof typeof textTypeVariants;
}

const Text: React.FC<TextProps> = ({
  children,
  tag = 'span',
  variant,
  ...rest
}) => (
  <TextBase as={tag} variant={variant} {...rest}>
    {children}
  </TextBase>
);

export default Text;
