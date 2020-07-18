import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { MdEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import api from '../../services/api';
import {
  Container,
  ContentPerfil,
  ProfileImg,
  ProfileName,
  ProfileCompany,
  ContentButtons,
  EditeProfileButton,
  DeleteProfileButton,
  LastConversations,
  Comments,
  Contacts,
} from './styles';

import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { BsChatDots } from 'react-icons/bs';
import { TiSocialSkypeOutline } from 'react-icons/ti';

interface IPerfilCustomer {
  photo: string | undefined;
  name: string | undefined;
  company: string | undefined;
  lastConversations: [
    {
      channel: number;
      finishedAt: number;
    },
  ];
  observations: string;
  contacts: [
    {
      channel: number;
      value: string;
    },
  ];
}

const ProfileCustomer: React.FC = () => {
  const [perfilCustomer, setPerfilCustomer] = useState<IPerfilCustomer>();

  useEffect(() => {
    api.get('/customers', { params: { id: 1 } }).then(response => {
      setPerfilCustomer(response.data[0]);
    });
  }, []);

  const dataConversation = useCallback(timestamp => {
    return moment.unix(timestamp).format('DD/MM/YYYY');
  }, []);

  const diffDays = useCallback(finishedAt => {
    return ((moment().unix() - finishedAt) / 86400).toFixed(0);
  }, []);

  return (
    <Container>
      <ContentPerfil>
        <ProfileImg src={perfilCustomer?.photo} />
        <div>
          <ProfileName>{perfilCustomer?.name}</ProfileName>
          <ProfileCompany>{perfilCustomer?.company}</ProfileCompany>
        </div>
      </ContentPerfil>

      <ContentButtons>
        <EditeProfileButton>
          <MdEdit size={20} />
        </EditeProfileButton>
        <DeleteProfileButton>
          <FaTrashAlt size={15} />
        </DeleteProfileButton>
      </ContentButtons>

      <LastConversations>
        <strong>ÚLTIMAS CONVERSAS</strong>

        {perfilCustomer?.lastConversations.map(conversation => (
          <div key={conversation.finishedAt}>
            {conversation.channel === 1 ? (
              <FaWhatsapp color="#A7B6C2" />
            ) : conversation.channel === 2 ? (
              <GoMail color="#A7B6C2" />
            ) : conversation.channel === 3 ? (
              <TiSocialSkypeOutline color="#A7B6C2" />
            ) : conversation.channel === 4 ? (
              <FiPhoneCall color="#A7B6C2" />
            ) : (
              <BsChatDots color="#A7B6C2" />
            )}
            <span>
              {`${dataConversation(conversation.finishedAt)}
              (${diffDays(conversation.finishedAt)} dias atrás)`}
            </span>
          </div>
        ))}
      </LastConversations>

      <Comments>
        <strong>OBSERVAÇÕES:</strong>
        <span>{perfilCustomer?.observations}</span>
      </Comments>

      <Contacts>
        {perfilCustomer?.contacts.map(contact => (
          <div key={contact.channel}>
            {contact.channel === 1 ? (
              <FaWhatsapp color="#A7B6C2" size={25} />
            ) : contact.channel === 2 ? (
              <GoMail color="#A7B6C2" size={25} />
            ) : contact.channel === 3 ? (
              <TiSocialSkypeOutline color="#A7B6C2" size={25} />
            ) : contact.channel === 4 ? (
              <FiPhoneCall color="#A7B6C2" size={25} />
            ) : (
              <BsChatDots color="#A7B6C2" size={25} />
            )}
            <div>
              <strong>
                {contact.channel === 1
                  ? 'WHATAPP'
                  : contact.channel === 2
                  ? 'EMAIL'
                  : contact.channel === 3
                  ? 'SKYPE'
                  : contact.channel === 4
                  ? 'TELEFONE'
                  : 'CHAT'}
              </strong>
              <span>{contact.value}</span>
            </div>
          </div>
        ))}
      </Contacts>
    </Container>
  );
};

export default ProfileCustomer;
