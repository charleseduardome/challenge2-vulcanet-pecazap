import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  border: 1px solid #c7d7e2;
  color: #c7d7e2;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isFocused &&
    css`
      color: #3e9296;
      border-color: #3e9296;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #3e9296;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #3e9296;
    &::placeholder {
      color: #c7d7e2;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
