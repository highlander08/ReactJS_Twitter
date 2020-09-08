import styled, { css } from 'styled-components';
import { Chat, Rocketseat, Favorite } from '../../styles/icons';
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
  /**100% do tamnho disponivel da tela */
`;
export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: (--gray);
`;
export const RocketseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;
export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap; /**texto nao quebra linha */

  > strong {
    margin-right: 5px;
  }
  > span,
  time {
    color: var(--gray);
  }
  > strong,
  span {
    white-space: nowrap; /**ao diminuir a tela */
    text-overflow: ellipsis; /**fica 3 pontinhos no final */
    overflow: hidden; /** de cada frase da tela */
  }
`;
export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(
    285px,
    max(175px, 41vw)
  ); /**limitador de altura e largura sempre o tamanho da tela alterar */

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /**separar os elementos/icones da div */
  flex-wrap: wrap; /**se adapta sempre que a tela mudar */
  margin: 11px auto 0;
  width: 100%; /**mobile */

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }
  /** estilizar o icone de comentario */
  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }
  /** estilizar o icone de tweet */
  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }
  /** estilizar o icone de coração */
  &:nth-child(3) {
    color: var(--like);
    > svg {
      fill: var(--like);
    }
  }
`;

const iconCss = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCss}
`;
export const RetweetIcon = styled(Rocketseat)`
  ${iconCss}
`;
export const LikeIcon = styled(Favorite)`
  ${iconCss}
`;
