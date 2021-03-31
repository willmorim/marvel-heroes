import React, { useEffect, useState } from 'react';

import { Container, Level } from './styles';

interface ISkillBar {
  level: number;
}

const MAX_LEVEL = 44;

export function AbilitiesLevel({ level }: ISkillBar) {
  const [bars, setBars] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setBars([]);

    for (let items = 1; items <= MAX_LEVEL; items += 1) {
      setBars((oldValue: number[]) => [...oldValue, items]);
    }

    setLoading(false);
  }, []);

  return (
    <Container>
      {!loading &&
        bars.map(data => (
          <Level
            key={data}
            color={data <= Math.round((level * MAX_LEVEL) / 100)}
            height={data === Math.round((level * MAX_LEVEL) / 100)}
          />
        ))}
    </Container>
  );
}
