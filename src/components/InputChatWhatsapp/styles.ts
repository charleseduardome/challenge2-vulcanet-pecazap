import styled from 'styled-components';

import { Form } from '@unform/web';

import Input from '../../components/Input';

export const Container = styled.div`
  flex: 1;
`;

export const FormSearchCustomers = styled(Form)`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 50%;

  div {
    border: none;
    background: none;
    color: #999;

    input {
      border: #fff;
      color: #999;
      height: 60px;
      font-size: 20px;
      ::placeholder {
        color: #999;
        font-size: 15px;
      }
    }

    svg {
      color: #a7b6c2;
    }
  }
`;

export const InputSearchCustomers = styled(Input)`
  border: none;
`;
