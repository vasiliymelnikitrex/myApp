import React, { Fragment } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
// import styled from 'styled-components/native';
import { configureStore } from './store';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Fragment>
      <StatusBar backgroundColor="#ffefd5" barStyle="dark-content" />
      <View style={{ backgroundColor: '#ffefd5', flex: 1 }}>
        <Text style={{ color: '#8da645', fontSize: 36, fontWeight: 'bold' }}>My App</Text>
      </View>
    </Fragment>
  </Provider>
);
