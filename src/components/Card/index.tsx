import 'react-native-gesture-handler';
import React from 'react';

import { Container, Name, HeroName, Image, InfoHero } from './styles';

interface CardProps {
  name: string;
  alterEgo: string;
  imagePath: string;
}

const Card: React.FC<CardProps> = ({ name, alterEgo, imagePath }) => {
  return (
    <Container>
      <Image source={{ uri: `http://localhost:3333/${imagePath}` }} />
      <InfoHero>
        <Name>{alterEgo}</Name>
        <HeroName>{name}</HeroName>
      </InfoHero>
    </Container>
  );
};

export default Card;
