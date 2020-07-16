import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00a7cf;
  height: 40px;
  border-radius: 4px;
  border: 0;
  padding: 0 10px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#00A7CF')};
  }
`;
