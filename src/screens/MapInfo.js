import React from 'react';
import { View } from 'react-native';
import ArrowBack from '../components/ArrowBack';

export default ({ navigation }) => {
  const { routeName } = navigation.state;
  const goBack = () => navigation.goBack();
  return (
    <View style={{ flex: 1 }}>
      <ArrowBack title={routeName} goBack={goBack} />
    </View>
  );
};
