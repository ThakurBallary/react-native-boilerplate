import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from 'navigation';
import { store } from 'store/redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
