import styled, { css } from 'styled-components';

type ButtonComponentProps = {
  ghost?: boolean;
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

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
