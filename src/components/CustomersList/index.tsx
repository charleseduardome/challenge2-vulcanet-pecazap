import React, { useState, useEffect, useCallback } from 'react';

import { ContentClientList, ClienteInfo } from './styles';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface ClientProps {
  id: number;
  name: string;
  photo: string;
  company: string;
}

const CustomersList: React.FC = () => {
  const [clienteData, setClienteData] = useState<ClientProps[]>([]);

  const history = useHistory();

  useEffect(() => {
    api.get('/customers').then(response => {
      setClienteData(response.data);
    });
  }, []);

  const handleClick = useCallback(
    id => {
      history.push(`/chat/${id}`);
    },
    [history],
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
