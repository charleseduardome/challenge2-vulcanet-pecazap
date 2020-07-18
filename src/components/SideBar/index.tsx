import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import Profile from '../../components/Profile';
import CustomersList from '../../components/CustomersList';

import logo from '../../assets/logo_white.svg';

import { Container, FormSearchCustomers, InputSearchCustomers } from './styles';

interface IPerfil {
  photo: string;
  name: string;
  company: string;
}

const SideBar: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [perfil, setPerfil] = useState<IPerfil>();

  useEffect(() => {
    api.get('/user').then(response => {
      setPerfil(response.data);
    });
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('Search for Customers');
  }, []);

  return (
    <Container>
      <Profile
        photo={perfil?.photo}
        name={perfil?.name}
        company={perfil?.company}
      />
      <FormSearchCustomers ref={formRef} onSubmit={handleSubmit}>
        <InputSearchCustomers
          name="search"
          icon={FaSearch}
          positionIcon="right"
        />
      </FormSearchCustomers>
      <div>
        <strong>CLIENTES</strong>
        <FaPlus size={25} />
      </div>

      <CustomersList />

      <img src={logo} alt="peçaZap" />
    </Container>
  );
};

export default SideBar;
