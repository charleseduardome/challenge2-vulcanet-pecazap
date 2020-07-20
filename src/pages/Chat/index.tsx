import React from 'react';

import SideBar from '../../components/SideBar';
import ListIconsContacts from '../../components/ListIconsContacts';
import HeaderChat from '../../components/HeaderChat';
import ProfileCustomer from '../../components/ProfileCustomer';
import ContentChatWhatapp from '../../components/ContentChatWhatapp';
import InputChatWhatsapp from '../../components/InputChatWhatsapp';
import { Container, Content } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <ListIconsContacts />

      <Content>
        <HeaderChat />
        <ContentChatWhatapp />
        <InputChatWhatsapp />
      </Content>

      <ProfileCustomer />
    </Container>
  );
};

export default Chat;
