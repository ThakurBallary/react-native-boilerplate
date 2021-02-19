import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { AuthStackNavigator, DrawerNavigator } from 'navigation';
import { authSelector } from 'features/auth';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const token = useSelector(authSelector.token);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {token ? (
          <Stack.Screen name="Main" component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
