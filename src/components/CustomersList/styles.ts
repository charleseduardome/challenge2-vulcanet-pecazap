import styled from 'styled-components';

export const ContentClientList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClienteInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      strong {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }
      p {
        font-size: 12px;
        color: #fff;
        opacity: 0.7;
        text-transform: uppercase;
      }
    }
  }

  button {
    width: 20px;
    height: 20px;
    border-radius: 50%;

    color: #fff;
    background: #e33e1a;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }
`;
