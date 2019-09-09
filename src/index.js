import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { configureStore } from './store';
import AppNavigator from './routes/AppNavigator';

const store = configureStore();

export default () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#574574" barStyle="light-content" />
      <AppNavigator />
    </Provider>
  );
};
