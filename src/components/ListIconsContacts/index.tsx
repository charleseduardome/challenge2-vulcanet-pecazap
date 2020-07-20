import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import * as ContactActions from '../../store/modules/contacts/actions';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

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
  const storeChannel = useSelector((state: ApplicationState) => state.contacts);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    id => {
      dispatch(ContactActions.ChooseChannel(id));
    },
    [dispatch],
  );

  return (
    <Container>
      <ButtonCalendar>
        <FaRegCalendarAlt size={30} />
      </ButtonCalendar>

      <ButtonWhatapp
        active={!!(storeChannel.channel === 1)}
        onClick={() => handleClick(1)}
      >
        <FaWhatsapp size={30} />
      </ButtonWhatapp>

      <ButtonEmail
        active={!!(storeChannel.channel === 2)}
        onClick={() => handleClick(2)}
      >
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
