import React from 'react';
import { View, Text } from 'react-native';
import { HEADER_FONT_SIZE } from '../styles/fontSizes';

export default () => (
  <View style={{ flex: 1 }}>
    <Text style={{ color: '#fdecff', fontSize: HEADER_FONT_SIZE, fontWeight: 'bold' }}>
      Home
    </Text>
  </View>
);
