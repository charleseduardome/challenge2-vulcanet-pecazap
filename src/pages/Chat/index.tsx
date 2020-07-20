import React from 'react';

import SideBar from '../../components/SideBar';
import ListIconsContacts from '../../components/ListIconsContacts';
import HeaderChat from '../../components/HeaderChat';
import HeaderEmailBox from '../../components/HeaderEmailBox';
import ProfileCustomer from '../../components/ProfileCustomer';
import ContentEmailBox from '../../components/ContentEmailBox';
import ContentChatWhatapp from '../../components/ContentChatWhatapp';
import InputChatWhatsapp from '../../components/InputChatWhatsapp';
import { Container, Content } from './styles';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const Chat: React.FC = () => {
  const storeChannel = useSelector((state: ApplicationState) => state.contacts);
  return (
    <Container>
      <SideBar />
      <ListIconsContacts />

      <Content>
        {storeChannel.channel === 1 ? (
          <>
            <HeaderChat />
            <ContentChatWhatapp />
            <InputChatWhatsapp />{' '}
          </>
        ) : (
          <>
            <HeaderEmailBox />
            <ContentEmailBox />
          </>
        )}
      </Content>

      <ProfileCustomer />
    </Container>
  );
};

export default Chat;
