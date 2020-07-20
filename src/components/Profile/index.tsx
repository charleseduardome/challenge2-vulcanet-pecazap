import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import {
  Container,
  ProfileImg,
  ProfileName,
  ProfileCompany,
  ProfileButton,
} from './styles';

interface IData {
  photo: string | undefined;
  name: string | undefined;
  company: string | undefined;
}

const Profile: React.FC<IData> = ({ photo, name, company }) => {
  const history = useHistory();

  const handleSignOut = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <Container onClick={handleSignOut}>
      <ProfileImg src={photo} />
      <div>
        <ProfileName>{name}</ProfileName>
        <ProfileCompany>{company}</ProfileCompany>
      </div>
      <ProfileButton icon={FiChevronDown} />
    </Container>
  );
};

export default Profile;
