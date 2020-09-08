import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Highlander Santos</h1>
        <h2>@rai_oficiall</h2>

        <p>
          Desenvolvedor Em Evolução na{' '}
          <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21/08/1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong> 121 </strong>
          </span>
          <span>
            <strong> 1822 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
