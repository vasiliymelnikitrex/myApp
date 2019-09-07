import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import { configureStore } from './store';
import AppNavigator from './routes/AppNavigator';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#ffefd5" barStyle="dark-content" />
    <AppNavigator />
  </Provider>
);
