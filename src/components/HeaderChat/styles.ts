import styled from 'styled-components';

import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: space-between;
  width: 100%;
  color: #fff;
`;

export const FormSearchCustomers = styled(Form)`
  margin-top: 20px;
  margin-left: 20px;

  div {
    border: 1px solid #a7b6c2;
    background: #fff;

    input {
      color: #999;
    }

    svg {
      color: #a7b6c2;
    }
  }
`;

export const InputSearchCustomers = styled(Input)``;

export const ButtonEndService = styled(Button)`
  margin-top: 20px;
  width: 250px;
  margin-right: 20px;
  justify-content: center;
`;
