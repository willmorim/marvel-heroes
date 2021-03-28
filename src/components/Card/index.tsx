import 'react-native-gesture-handler';
import React from 'react';

import { Container, Name, HeroName, Image, InfoHero } from './styles';

interface CardProps {
  name: string;
  alterEgo: string;
  imagePath: string;
}

export function Card({ name, alterEgo, imagePath }: CardProps) {
  return (
    <Container>
      <Image source={{ uri: `http://localhost:3333/${imagePath}` }} />
      <InfoHero>
        <Name>{alterEgo}</Name>
        <HeroName>{name}</HeroName>
      </InfoHero>
    </Container>
  );
}
