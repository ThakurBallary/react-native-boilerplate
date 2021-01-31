import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from 'navigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
