import React, { useRef, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

import {
  Container,
  FormSearchCustomers,
  InputSearchCustomers,
  ButtonEndService,
} from './styles';

const HeaderChat: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Search...');
  }, []);

  return (
    <Container>
      <FormSearchCustomers ref={formRef} onSubmit={handleSubmit}>
        <InputSearchCustomers
          name="search"
          icon={FaSearch}
          positionIcon="right"
        />
      </FormSearchCustomers>

      <ButtonEndService type="submit">FINALIZAR ATENDIMENTO</ButtonEndService>
    </Container>
  );
};

export default HeaderChat;
