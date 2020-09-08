import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  ProfileData,
  Avatar,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfill</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Highlander Santos</strong>
          <span>@highlander/08</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
