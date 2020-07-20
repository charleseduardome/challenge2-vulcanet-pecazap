import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-top: 20px;
  width: 100%;
  background: none;

  &:hover {
    background: none;
  }

  div {
    margin-left: 10px;
  }
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export const ProfileName = styled.h1`
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  color: #ffffff;
`;
export const ProfileCompany = styled.strong`
  margin-top: 3px;
  color: #ffffff;
  opacity: 0.7;
  font-family: 'Lato';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const ProfileButton = styled(Button)`
  margin-left: 100px;
  width: 40px;
  color: rgba(0, 0, 0, 0.2);
  background: none;
  border: 0;

  &:hover {
    background: ${shade(0.0, '#3e9296')};
  }
`;
