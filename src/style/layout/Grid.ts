import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/util/breakpointsMedia';
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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;

  ${breakpointsMedia({
    md: {
      gap: '24px',
    },
  })}
`;

const Col = styled.div<propToStyleProps>`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ propStyle }) => propToStyle({ propName: propStyle })}

  & + div {
    min-width: 300px;
  }

  div:first-child {
    margin-bottom: 40px;
  }

  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;

      div:first-child {
        margin-bottom: 0;
      }
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

const Row = styled.div<propToStyleProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;

  ${({ propStyle }) => propToStyle({ propName: propStyle })}
`;

const Grid = {
  Container,
  Col,
  Row,
};

export default Grid;
