import styled from 'styled-components';

import { Search } from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    /**ocupar apenas 399 de largura em 100% */
    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  /** ficar o input no top e nao mexer quando rolar o scroll #index deixa o elemento acima de todos os outros elementos */
  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);

  max-height: 57px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--search);

  &::placeholder {
    color: var(--gray);
  }
  /**colocar icone dentro do input */
  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out; /** */
  }
  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);
    ~ svg {
      fill: var(--twitter);
    }
  }
`;
export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray); /**cor do icone */
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  /* *efeito do scroll do twitter
  position: sticky;
  top: 0; */
  /**aplicar css apartir da 2 div */
  > div + div {
    margin-top: 15px;
  }
`;
