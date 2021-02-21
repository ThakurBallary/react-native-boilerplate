import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from 'navigation/MainStackNavigator';
import { styles } from 'themes';
import { getUsers, userSelector } from 'features/users';
import { useAppDispatch, useAppSelector } from 'hooks';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, error, users } = useAppSelector(userSelector.users);

  console.log({ isLoading, error, users });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.flexCenter}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Open Profile"
      />
    </View>
  );
}
