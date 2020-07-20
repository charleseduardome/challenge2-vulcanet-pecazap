import styled from 'styled-components';

import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  color: #fff;

  strong {
    margin-left: 10px;
    color: #222222;
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const FormSearchCustomers = styled(Form)`
  margin-left: 20px;

  div {
    border: 1px solid #a7b6c2;
    background: #fff;

    input {
      color: #999;
      width: 150px;
    }

    svg {
      color: #a7b6c2;
    }
  }
`;

export const InputSearchCustomers = styled(Input)``;

export const ButtonNewEmail = styled(Button)`
  margin: 0 10px 0;
  width: 150px;
  margin-right: 20px;
  justify-content: center;
`;
