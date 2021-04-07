import React from 'react';

import { Container } from './styles';
import { Level } from './Level';

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
          key={`level-${data}`}
          level={data}
          alreadyReached={data <= Math.round((level * MAX_LEVEL) / 100)}
          isCurrentLevel={data === Math.round((level * MAX_LEVEL) / 100)}
        />
      ))}
    </Container>
  );
}
