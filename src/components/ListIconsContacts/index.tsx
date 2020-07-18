import React from 'react';
// import { useParams } from 'react-router-dom';

import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp, FaRegCalendarAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { BsChatDots } from 'react-icons/bs';
import { TiSocialSkypeOutline } from 'react-icons/ti';

import {
  Container,
  ButtonCalendar,
  ButtonWhatapp,
  ButtonEmail,
  ButtonSkype,
  ButtonPhoneCall,
  ButtonRocketChat,
} from './styles';

const ListIconsContacts: React.FC = () => {
  // const { id } = useParams();

  return (
    <Container>
      <ButtonCalendar>
        <FaRegCalendarAlt size={30} />
      </ButtonCalendar>

      <ButtonWhatapp active={true}>
        <FaWhatsapp size={30} />
      </ButtonWhatapp>

      <ButtonEmail active={true}>
        <GoMail size={30} />
      </ButtonEmail>

      <ButtonSkype>
        <TiSocialSkypeOutline size={30} />
      </ButtonSkype>

      <ButtonPhoneCall>
        <FiPhoneCall size={30} />
      </ButtonPhoneCall>

      <ButtonRocketChat>
        <BsChatDots size={30} />
      </ButtonRocketChat>
    </Container>
  );
};

export default ListIconsContacts;
