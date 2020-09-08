import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          {/* <p>{'Loren ipsum color sit amet'.repeat(90)}</p> */}
          <List
            title="Talvez você curta"
            elemetns={[
              <FollowSuggestion
                name="Herbert Santos"
                nickname="@Hr_official"
              />,
              <FollowSuggestion name="Diego3g" nickname="@Diego3g" />,
              <FollowSuggestion
                name="Lucas Morales"
                nickname="@Lucasmorales"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elemetns={[<News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elemetns={[<News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elemetns={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
