import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import moment from 'moment';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import api from '../../services/api';

import { Container, TopStart, ContentMessages, Email } from './styles';

interface IEmail {
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

const ContentChatWhatapp: React.FC = () => {
  const storeCustomer = useSelector(
    (state: ApplicationState) => state.customers,
  );

  const storeChannel = useSelector((state: ApplicationState) => state.contacts);
  const [emailData, setEmailData] = useState<IEmail[]>();

  useEffect(() => {
    api
      .get('chats', {
        params: {
          channel: storeChannel.channel,
          customer: storeCustomer.customerSelected,
        },
      })
      .then(response => {
        setEmailData(response.data);
        console.log(response.data);
      });
  }, [storeChannel.channel, storeCustomer.customerSelected]);

  const dataConversation = useCallback(timestamp => {
    return moment.unix(timestamp).format('DD/MM/YYYY');
  }, []);

  return (
    <Container>
      {!emailData ? (
        <p>Sem dados para exibição</p>
      ) : (
        <>
          <TopStart>
            <p>ASSUNTO</p>
            <p>INÍCIO</p>
            <p>ÚLTIMA MENSAGEM</p>
          </TopStart>

          <ContentMessages>
            {emailData?.map(email => (
              <>
                <Email>
                  <strong>{email.subject}</strong>
                  <strong>{dataConversation(email.start)}</strong>
                  <strong>
                    {dataConversation(
                      email.messages[Array.length - 1].timestamp,
                    )}
                  </strong>
                  <button>1</button>
                  <FiArrowRight size={16} />
                </Email>
              </>
            ))}
          </ContentMessages>
        </>
      )}
    </Container>
  );
};

export default ContentChatWhatapp;
