import { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ghost, ...rest }) => (
  <ButtonComponent ghost={ghost} type="button" {...rest}>
    {children}
  </ButtonComponent>
);

export default Button;
