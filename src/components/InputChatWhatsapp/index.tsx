import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import { Container, FormSearchCustomers, InputSearchCustomers } from './styles';
import iconsInputChatwhatsapp from '../../assets/iconsInputChatwhatsapp.svg';

const InputChatWhatsapp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Search...');
  }, []);

  return (
    <Container>
      <FormSearchCustomers ref={formRef} onSubmit={handleSubmit}>
        <InputSearchCustomers
          name="search"
          positionIcon="right"
          placeholder="Digite sua mensagem..."
        />
        <img src={iconsInputChatwhatsapp} alt="peçaZap" />
      </FormSearchCustomers>
    </Container>
  );
};

export default InputChatWhatsapp;
