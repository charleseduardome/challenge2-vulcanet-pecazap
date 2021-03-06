import styled from 'styled-components';

import Button from '../Button';

interface ButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 65px;
  height: 100vh;
  margin-top: 10px;
  margin-left: 10px;
  background: #f8fafc;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.04);
  border-radius: 20px 0px 0px 0px;
  align-items: center;
`;

export const ButtonCalendar = styled(Button)`
  background: #f8fafc;
  color: #00a7cf;
  border-radius: 0;
  height: 60px;
  padding: 20px;

  &:hover {
    background: #f8fafc;
  }
`;

export const ButtonWhatapp = styled(Button)<ButtonProps>`
  background: ${(props): string => (props.active ? '#25d366' : '#f8fafc')};
  color: ${(props): string => (props.active ? '#fff' : '#25d366')};
  margin-top: 0;
  border-radius: 0;
  height: 60px;
  padding: 20px;

  &:hover {
    background: #f8fafc;
    color: #25d366;
  }
`;

export const ButtonEmail = styled(Button)<ButtonProps>`
  background: ${(props): string => (props.active ? '#e33e1a' : '#f8fafc')};
  color: ${(props): string => (props.active ? '#fff' : '#e33e1a')};
  border-radius: 0;
  margin-top: 0;
  height: 60px;
  padding: 20px;

  &:hover {
    background: #f8fafc;
    color: #e33e1a;
  }
`;

export const ButtonSkype = styled(Button)`
  background: #f8fafc;
  color: #00aff0;
  border-radius: 0;
  height: 60px;
  padding: 20px;

  &:hover {
    background: #f8fafc;
  }
`;

export const ButtonPhoneCall = styled(Button)`
  background: #f8fafc;
  color: #6a4aea;
  border-radius: 0;
  height: 60px;
  padding: 20px;

  &:hover {
    background: #f8fafc;
  }
`;

export const ButtonRocketChat = styled(Button)`
  background: #f8fafc;
  color: #e87c28;
  border-radius: 0;
  height: 60px;
  padding: 20px;

  &:hover {
    background: #f8fafc;
  }
`;
