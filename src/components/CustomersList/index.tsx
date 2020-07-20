import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import * as CustomerActions from '../../store/modules/customers/actions';

import { ContentClientList, ClienteInfo } from './styles';

import api from '../../services/api';

interface ClientProps {
  id: number;
  name: string;
  photo: string;
  company: string;
}

const CustomersList: React.FC = () => {
  const dispatch = useDispatch();
  const [clienteData, setClienteData] = useState<ClientProps[]>([]);

  useEffect(() => {
    api.get('/customers').then(response => {
      setClienteData(response.data);
    });
  }, []);

  const handleClick = useCallback(
    id => {
      dispatch(CustomerActions.ChooseCustumer(id));
    },
    [dispatch],
  );

  return (
    <ContentClientList>
      {clienteData.map(client => (
        <ClienteInfo key={client.id} onClick={() => handleClick(client.id)}>
          <div>
            <img alt="Perfil" src={client.photo} />
            <div>
              <strong>{client.name}</strong>
              <p>{client.company}</p>
            </div>
          </div>
          <button>2</button>
        </ClienteInfo>
      ))}
    </ContentClientList>
  );
};

export default CustomersList;
