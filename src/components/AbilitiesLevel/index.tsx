import React, { useEffect, useState } from 'react';

import { Container, Level } from './styles';

interface ISkillBar {
  level: number;
}

const AbilitiesLevel: React.FC<ISkillBar> = ({ level }) => {
  const [bars, setBars] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setBars([]);

    for (let items = 1; items <= 44; items += 1) {
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
            color={data <= Math.round((level * 44) / 100)}
            height={data === Math.round((level * 44) / 100)}
          />
        ))}
    </Container>
  );
};

export default AbilitiesLevel;
