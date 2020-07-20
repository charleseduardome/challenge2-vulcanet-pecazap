import React, { useRef, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

import {
  Container,
  FormSearchCustomers,
  InputSearchCustomers,
  ButtonNewEmail,
} from './styles';

const HeaderEmailBox: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Search...');
  }, []);

  return (
    <Container>
      <strong>CAIXA DE ENTRADA</strong>
      <div>
        <FormSearchCustomers ref={formRef} onSubmit={handleSubmit}>
          <InputSearchCustomers
            name="search"
            icon={FaSearch}
            positionIcon="right"
          />
        </FormSearchCustomers>
        <ButtonNewEmail type="submit">NOVO EMAIL</ButtonNewEmail>
      </div>
    </Container>
  );
};

export default HeaderEmailBox;
