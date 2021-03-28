import 'react-native-gesture-handler';
import React from 'react';

import { Container, Title, Subtitle } from './styles';

interface CategoryProps {
  title: string;
}

export function Category({ title }: CategoryProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>Ver tudo</Subtitle>
    </Container>
  );
}
