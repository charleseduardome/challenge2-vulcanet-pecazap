import React from 'react';

import SideBar from '../../components/SideBar';
import ListIconsContacts from '../../components/ListIconsContacts';
import { Container } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <ListIconsContacts />
    </Container>
  );
};

export default Chat;
