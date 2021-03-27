import 'react-native-gesture-handler';
import React from 'react';

import { Container, Title, Subtitle } from './styles';

interface CategoryProps {
  title: string;
}

const Category: React.FC<CategoryProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>Ver tudo</Subtitle>
    </Container>
  );
};

export default Category;
