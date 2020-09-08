import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  elemetns: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elemetns }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elemetns.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
