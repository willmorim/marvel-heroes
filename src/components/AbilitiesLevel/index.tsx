import React from 'react';

import { Container, Level } from './styles';

interface ISkillBar {
  level: number;
}

const MAX_LEVEL = 44;
const BARS_LEVELS = new Array(MAX_LEVEL).fill(1).map((_, index) => index + 1);

export function AbilitiesLevel({ level }: ISkillBar) {
  return (
    <Container>
      {BARS_LEVELS.map(data => (
        <Level
          key={data}
          color={data <= Math.round((level * MAX_LEVEL) / 100)}
          height={data === Math.round((level * MAX_LEVEL) / 100)}
        />
      ))}
    </Container>
  );
}
