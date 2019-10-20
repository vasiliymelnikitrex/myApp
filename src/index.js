import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { ErrorHandlingProvider } from './hocs/errorHadnling';
import { configureStore } from './store';
import AppNavigator from './routes/AppNavigator';
import { MAIN_THEME } from './styles/colors';

const store = configureStore();

export default () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <ErrorHandlingProvider>
      <Provider store={store}>
        <StatusBar
          backgroundColor={MAIN_THEME.GRADIENT_START_COLOR}
          barStyle="light-content"
        />
        <AppNavigator />
      </Provider>
    </ErrorHandlingProvider>
  );
};
