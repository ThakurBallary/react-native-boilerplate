import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabNavigator } from 'navigation';

export type DrawerParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function MainStackNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
