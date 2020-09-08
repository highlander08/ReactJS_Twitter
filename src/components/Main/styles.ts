import styled, {css} from 'styled-components';
import {ArrowLeft, Home, Notifications, Search, Email} from '../../styles/icons';

export const Container = styled.div`
display: flex;
flex-direction: column;
/**se a tela for maior que 601, a tela será 601 por que é valor minimo que eu quero ter */
width: min-content(601px, 100%);

/**partir de 500px crie a borda */
@media (min-width: 500px){
border-left: 1px solid var(--outline);
border-right: 1px solid var(--outline);
}
`;

export const Header = styled.div`
/**z-index 2 deixa o elemento por cima de todos os outros elemntos */
z-index: 2; /**aparecer o icone de voltar do header */
position: sticky; /**ficar preso na parte de cima da tela */
top: 0;
background: var(--primary);

display: flex;
align-items: center;

text-align: left;

padding: 8px 0 9px 13px;
border-bottom: 1px solid var(--outline); /** uma linha abaixo */

> button {
  padding: 8px;
  border-radius: 50%;

  outline: 0;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }
}
`;
export const BackIcon = styled(ArrowLeft)`
width: 24px;
height: 24px;

fill: var(--twitter);
`;
export const ProfileInfo = styled.div`
margin-left: 17px;

display: flex;
flex-direction: column;

> strong {
  font-size: 19px;
}
> span {
  font-size: 15px;
  color: var(--gray);
}
`;


export const ButtonMenu = styled.div`
position: fixed; /**deixar fixado lá embaixo da tela usando o bottom tambem */
bottom: 0;
left: 0;
z-index: 2;

background: var(--primary);
width: 100%;
border-top: 1px solid var(--outline);

display: flex;
justify-content: space-between; /**deixa os icones separados o maximo possivel */

/**faz com que barra mude de tamanho de acordo com o tamanho da tela*/
padding: 8px min(46px, max(10vw, 10px));

/**apartir de 500px nao quero que a barra apareça */
@media (min-width: 501px){
  display: none;
}
`;

const iconCss = css`
width: 31px;
height: 31px;

cursor: pointer;

fill: var(--gray);

&:hover, &:active {
  fill: var(--twitter)
}
`;
export const HomeIcon = styled(Home)`
${iconCss}
`;
export const SearchIcon = styled(Search)`
${iconCss}
`;
export const EmailIcon = styled(Email)`
${iconCss}
`;
export const BellIcon = styled(Notifications)`
${iconCss}
`;