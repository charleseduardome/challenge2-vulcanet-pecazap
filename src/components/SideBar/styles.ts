import styled from 'styled-components';

import { Form } from '@unform/web';

import Input from '../../components/Input';

export const Container = styled.div`
  width: 25%;
  margin-left: 10px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    strong {
      color: #fff;
      font-family: 'Lato';
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
    }

    > svg {
      color: #fff;
    }
  }

  > img {
    width: 100px;
    height: auto;
    position: absolute;
    bottom: 10px;
    left: 100px;
  }
`;

export const FormSearchCustomers = styled(Form)`
  margin-top: 20px;

  div {
    border: 1px solid #1e878c;
    background: rgba(255, 255, 255, 0.15);

    input {
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }
`;

export const InputSearchCustomers = styled(Input)``;
