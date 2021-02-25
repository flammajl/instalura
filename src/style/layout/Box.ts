import styled from 'styled-components';

import propToStyle from '../theme/util/propToStyle';

type propToStyleProps = {
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

const Box = styled.div<propToStyleProps>`
  ${({ propStyle }) => propToStyle({ propName: propStyle })}
`;

export default Box;
