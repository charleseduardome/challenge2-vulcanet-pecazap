import React from 'react';

import SideBar from '../../components/SideBar';
import ListIconsContacts from '../../components/ListIconsContacts';
import HeaderChat from '../../components/HeaderChat';
import ProfileCustomer from '../../components/ProfileCustomer';
import { Container, Content } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <ListIconsContacts />

      <Content>
        <HeaderChat />
      </Content>

      <ProfileCustomer />
    </Container>
  );
};

export default Chat;
