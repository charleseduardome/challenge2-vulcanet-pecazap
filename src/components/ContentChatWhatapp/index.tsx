import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { RiCheckDoubleLine } from 'react-icons/ri';

import api from '../../services/api';

import {
  Container,
  TopStart,
  ContentMessages,
  HeaderMessages,
  BodyMessages,
} from './styles';

interface chat {
  id: number;
  customer: number;
  channel: number;
  subject?: string;
  start: number;
  messages: [
    {
      seen: boolean;
      timestamp: number;
      body: string;
      type: string;
    },
  ];
}

interface ICustomer {
  photo: string | undefined;
  name: string | undefined;
}

interface IUser {
  photo: string | undefined;
  name: string | undefined;
}

const ContentChatWhatapp: React.FC = () => {
  const [chatData, setChatData] = useState<chat>();
  const [customer, setCustomer] = useState<ICustomer>();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    api.get('chats', { params: { channel: 1, customer: 1 } }).then(response => {
      setChatData(response.data[0]);
    });
  }, []);

  useEffect(() => {
    api
      .get('/customers', { params: { id: chatData?.customer } })
      .then(response => {
        setCustomer(response.data[0]);
      });
  }, [chatData]);

  useEffect(() => {
    api.get('/user').then(response => {
      setUser(response.data);
    });
  }, []);

  const dataConversation = useCallback(timestamp => {
    return moment.unix(timestamp).format('DD/MM/YYYY');
  }, []);

  const horaConversation = useCallback(timestamp => {
    return moment.unix(timestamp).format(`DD/MM/YYYY hh:mm`);
  }, []);

  return (
    <Container>
      <TopStart>
        <p>
          Atendimento iniciado em{' '}
          <strong>{` ${dataConversation(chatData?.start)}`}</strong>
        </p>
        <span />
      </TopStart>

      <ContentMessages>
        {chatData?.messages.map(msg => (
          <>
            <HeaderMessages type={msg.type}>
              {msg.type === 'incoming' ? (
                <>
                  <img src={customer?.photo} alt="Customer" />
                  <div>
                    <strong>{customer?.name}</strong>
                    <span>{` - ${horaConversation(msg.timestamp)}`}</span>
                    <RiCheckDoubleLine size={20} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <RiCheckDoubleLine size={20} />
                    <span>{`${horaConversation(msg.timestamp)} - `}</span>
                    <strong>{user?.name}</strong>
                  </div>
                  <img src={user?.photo} alt="Customer" />
                </>
              )}
            </HeaderMessages>
            <BodyMessages type={msg.type}>{msg.body}</BodyMessages>
          </>
        ))}
      </ContentMessages>
    </Container>
  );
};

export default ContentChatWhatapp;
