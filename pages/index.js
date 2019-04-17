import React from 'react';
import styled from 'styled-components';

import { Container } from '../components/grid';

const networks = [
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/flaranda' },
  { title: 'Twitter', href: 'https://www.twitter.com/flaranda' },
  { title: 'Github', href: 'https://www.github.com/flaranda' },
  { title: 'Instagram', href: 'https://www.instagram.com/flaranda' },
];

export default () => (
  <Index>
    <Container>
      <IndexTitle>
        Hi!
        <IndexSubtitle>
          My name is Fran,
        </IndexSubtitle>
        <IndexSubtitle>
          Software Engineer.
        </IndexSubtitle>
      </IndexTitle>
      <IndexResume>
        I've been passionate about technology since I was a kid. I enjoy designing and developing tech-based products, getting involved in business processes and iterating to fit the user needs.
      </IndexResume>
      <IndexResume>
        Currently, I lead product development as CTO & Founder at <a href="https://wwww.fontown.com" target="blank">Fontown</a>, choosing the best technologies and analizing users behavior to make the product grow properly.
      </IndexResume>
      <IndexResume>
        My top 5 buzzwords: React, Next.js, Node, Ruby, Golang.
      </IndexResume>
      <IndexNetworks>
        {networks.map(({ title, href }) => (
          <IndexNetworksItem key={title}>
            <IndexNetworksItemLink href={href} target="blank">
              {title}
            </IndexNetworksItemLink>
          </IndexNetworksItem>
        ))}
      </IndexNetworks>
    </Container>
  </Index>
);

const Index = styled.section`
  display: flex;
  padding: 128px 128px 0;

  a { 
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 1023px) {
    padding: 64px 64px;
  }

  @media only screen and (max-width: 639px) {
    padding: 32px 32px;
  }
`;

const IndexTitle = styled.h1`
  display: block;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  font-size: 96px;
  line-height: 176px;

  @media only screen and (max-width: 1023px) {
    font-size: 72px;
    line-height: 176px;
  }

  @media only screen and (max-width: 639px) {
    font-size: 64px;
    line-height: 144px;
  }
`;

const IndexSubtitle = styled.sub`
  display: block;
  font-family: 'Merriweather', serif;
  font-weight: lighter;
  font-size: 64px;
  line-height: 96px;

  @media only screen and (max-width: 1023px) {
    font-size: 48px;
    line-height: 72px;
  }

  @media only screen and (max-width: 639px) {
    font-size: 31px;
    line-height: 48px;
  }

  @media only screen and (max-width: 321px) {
    font-size: 26px;
    line-height: 48px;
  }
`;

const IndexResume = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  max-width: 720px;
  margin-top: 16px;

  &:first-of-type {
    margin-top: 112px;
  }

  @media only screen and (max-width: 1023px) {
    &:first-of-type {
      margin-top: 72px;
    }
  }

  @media only screen and (max-width: 639px) {
    font-size: 16px;

    &:first-of-type {
      margin-top: 64px;
    }
  }
`;

const IndexNetworks = styled.div`
  margin-top: 96px;

  @media only screen and (max-width: 1023px) {
    margin-top: 64px;
  }
`;

const IndexNetworksItem = styled.span`
  &:not(:last-child)::after {
    content: '·';
    padding: 0 16px;
  }
`;

const IndexNetworksItemLink = styled.a`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: black;
  text-decoration: none;

  @media only screen and (max-width: 639px) {
    font-size: 16px;
  }
`;
