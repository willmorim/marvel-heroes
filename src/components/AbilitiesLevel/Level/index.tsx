import React from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { Container } from './styles';

interface ILevel {
  alreadyReached: boolean;
  isCurrentLevel: boolean;
  level: number;
}

export function Level({ alreadyReached, isCurrentLevel, level }: ILevel) {
  const animatedValue = useSharedValue(0);

  animatedValue.value = withDelay(
    level * 300,
    withTiming(1, { duration: 200 }),
  );

  const levelBarStyle = useAnimatedStyle(() => {
    const maxHeight = isCurrentLevel ? 15 : 8;
    return {
      height: interpolate(animatedValue.value, [0, 1], [8, maxHeight]),
      backgroundColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        ['#313140', !alreadyReached ? '#313140' : '#fff'],
      ),
    };
  });

  return <Container style={levelBarStyle} />;
}
