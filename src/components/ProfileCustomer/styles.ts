import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background: #fff;
  width: 20%;
`;

export const ContentPerfil = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;
export const ProfileName = styled.h1`
  margin-left: 10px;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  color: #222222;
`;
export const ProfileCompany = styled.strong`
  margin-left: 10px;
  margin-top: 3px;
  color: #79accd;
  font-family: 'Lato';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditeProfileButton = styled(Button)`
  justify-content: center;
  margin-right: 5px;
  background: #fff;
  color: #00a7cf;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 1px 0px #e5e5e5;

  &:hover {
    background: ${shade(0.0, '#fff')};
  }
`;

export const DeleteProfileButton = styled(Button)`
  justify-content: center;
  margin-right: 5px;
  background: #fff;
  color: #e33e1a;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 1px 0px #e5e5e5;

  &:hover {
    background: ${shade(0.0, '#fff')};
  }
`;

export const LastConversations = styled.div`
  margin-top: 20px;

  strong {
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
    color: #79accd;
  }

  div {
    display: flex;
    margin-top: 10px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    span {
      margin-left: 5px;
      font-size: 15px;
      color: #222222;
    }
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 5px;

  strong {
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
    color: #79accd;
  }

  span {
    font-size: 15px;
    color: #222222;
  }
`;

export const Contacts = styled.div`
  margin-top: 40px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 10px;

      strong {
        font-size: 12px;
        font-weight: bold;
        line-height: 22px;
        color: #79accd;
      }
      span {
        font-size: 15px;
        color: #222222;
      }
    }
  }
`;
