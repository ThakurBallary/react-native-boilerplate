import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParamList } from 'navigation/AuthStackNavigator';
import { setToken } from 'features/auth';
import { styles } from 'themes';

type SignInNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

type Props = {
  navigation: SignInNavigationProp;
};

export default function SignIn({ navigation }: Props) {
  const dispatch = useDispatch();

  function login() {
    dispatch(setToken('1'));
  }

  function signup() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.flexCenter}>
      <Text onPress={login}>Sign In</Text>
      <Text onPress={signup}>Sign Up</Text>
    </View>
  );
}
