import { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const Button: React.FC<ButtonProps> = ({ children, ghost, ...rest }) => (
  <ButtonComponent ghost={ghost} type="button" {...rest}>
    {children}
  </ButtonComponent>
);

export default Button;
