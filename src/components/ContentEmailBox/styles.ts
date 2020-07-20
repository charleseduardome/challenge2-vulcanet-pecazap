import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  height: 100vh;
  background: #f5f8fa;
  border: 1px solid rgba(221, 221, 221, 0.3);

  > p {
    margin: 10px;
    color: #636466;
    font-size: 15px;
    line-height: 16px;
    padding: 12px;
    background: #dbf3f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }
`;

export const TopStart = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 10px;
  margin-left: 30px;

  p {
    flex-grow: 1;
    font-weight: bold;
    color: #79accd;
    font-size: 12px;
  }
`;

export const ContentMessages = styled.div`
  margin: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Email = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background: #fff;
  margin: 5px 10px;

  &:hover {
    background: ${shade(0.1, '#fff')};
  }

  strong {
    font-weight: bold;
    font-size: 15px;
    color: #636466;
  }

  button {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    color: #fff;
    background: #e33e1a;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  svg {
    color: #999;
  }
`;
