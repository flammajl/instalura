import { css } from 'styled-components';
import breakpointsMedia from '../breakpointsMedia';

interface IpropToStyle {
  propName:
    | { [key: string]: string }
    | {
        xs?: { [key: string]: string };
        sm?: { [key: string]: string };
        md?: { [key: string]: string };
        lg?: { [key: string]: string };
        xl?: { [key: string]: string };
      };
}

const propToStyle = ({ propName }: IpropToStyle) => props => {
  if (propName) {
    const propValueKeys = Object.keys(propName);
    const breakMedia = ['xs', 'sm', 'md', 'lg', 'xl'];

    if (propValueKeys.some(item => breakMedia.includes(item))) {
      return css`
        ${propValueKeys.map(
          value =>
            breakpointsMedia({
              [value]: {
                ...propName[value],
              },
            }),
          // eslint-disable-next-line
        )}
      `;
    }

    return {
      ...propName,
    };
  }
};
export default propToStyle;
