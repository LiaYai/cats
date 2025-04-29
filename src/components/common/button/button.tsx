import React from 'react';
import { useCat } from '../../../context/cat-context';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid #888888;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #696969;
    border-color: #d6d6d6;
    transform: scale(1.03);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    pointer-events: none;
  }

  @media (prefers-color-scheme: light) {
    background-color: #f0f0f0;

    &:hover {
      background-color: #d6d6d6;
      border-color: #1a1a1a;
    }
  }
`;

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({ onClick, disabled, children }: ButtonProps) => {
  const { isLoading } = useCat();
  return (
    <StyledButton className="button" onClick={onClick} disabled={disabled} type="button">
      {isLoading ? 'Loading...' : children}
    </StyledButton>
  );
};

export default Button;
