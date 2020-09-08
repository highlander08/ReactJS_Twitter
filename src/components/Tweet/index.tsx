import React from 'react';

import {
  Container,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
  Retweeted,
  Body,
  RocketseatIcon,
  Avatar,
  Content,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time> 21 Agos</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              20
            </Status>

            <Status>
              <LikeIcon />
              1000
            </Status>
          </Icons>
        </Content>
      </Body>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time> 21 Agos</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              20
            </Status>

            <Status>
              <LikeIcon />
              1000
            </Status>
          </Icons>
        </Content>
      </Body>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time> 21 Agos</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              20
            </Status>

            <Status>
              <LikeIcon />
              1000
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
