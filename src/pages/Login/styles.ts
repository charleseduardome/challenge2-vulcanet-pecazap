import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/img_background.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #f5f8fa;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  img {
    margin-top: 20px;
  }

  form {
    margin: 20px 0;
    width: 60%;
    min-width: 300px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #999;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#999')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: 100% 95%;
`;
