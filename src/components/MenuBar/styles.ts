import styled, { css } from 'styled-components';
import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Rocketseat,
} from '../../styles/icons';

export const Container = styled.div`
  display: none;
  /**se a tela ficar em 500 execute a regra */
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /**grudar na tela */
    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;
    /**transformar em um scroll */
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /**quando a tela atingir 1280px aplica a regra de css */
  @media (max-width: 1280px) {
    align-items: flex-start; /**jogar os elementos para inicar na esqueda */
  }
`;
export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;
  > path {
    fill: var(--twitter);
  }
  margin-bottom: 20px;
`;
export const MenuButton = styled.button`
  /**nao amasssar o botao */
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none; /**span nao aparece */
  }
  /**quando a largura for igual ou maior que 1280px aplique a regra*/
  @media (min-width: 1280px) {
    > span {
      display: inline; /**span aparece */
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }
  padding: 8.25px 0;
  outline: 0;
  /**aplica apenas no segundo button em diante */
  & + button {
    margin-top: 16.5px;
  }
  /**aplicar css no ultimo botao */
  & + button:last-child {
    margin-top: 23px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      /**voltar ao que era antes */
      height: unset;

      > span {
        display: inline; /**aparecer novamente */
      }
    }
  }
  cursor: pointer;
  border-radius: 50%;

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter); /**cor do icone */
    }
  }
`;

const iconCss = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCss}
`;
export const BellIcon = styled(Notifications)`
  ${iconCss}
`;
export const EmailIcon = styled(Email)`
  ${iconCss}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCss}
`;
export const ProfileIcon = styled(Person)`
  ${iconCss}
`;

export const BotSide = styled.div`
  margin-top: 28px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none; /**nao aparece o nome highlander */
  /**minimo é 1280px aplique */
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block; /**icone aparece */
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like); /**cor do icone vai ficar vermelho */
      }
    }
  }
`;
