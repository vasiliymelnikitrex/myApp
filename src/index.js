import React, { Fragment } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { configureStore } from './store';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Fragment>
      <StatusBar backgroundColor="#e4e1b2" barStyle="light-content" />
      <View>
        <Text>My App</Text>
      </View>
    </Fragment>
  </Provider>
);
