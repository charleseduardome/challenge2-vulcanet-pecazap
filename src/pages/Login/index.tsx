import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import mediasLogos from '../../assets/medias_logos.svg';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/chat');
  }, [history]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="peçaZap" />
        <img src={mediasLogos} alt="Medias peçaZap" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="username" icon={FiUser} placeholder="Usuário" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button icon={FiLogIn} type="submit">
            ENTRAR
          </Button>

          <Link to="/">Esqueceu a senha?</Link>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
