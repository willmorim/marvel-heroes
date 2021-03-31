import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './routes';

export function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}
