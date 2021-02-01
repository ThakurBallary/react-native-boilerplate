import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from 'navigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
