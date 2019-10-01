import React from 'react';
import { View, Text } from 'react-native';
import { HEADER_FONT_SIZE } from '../styles/fontSizes';
import { PRIMARY_COLOR } from '../styles/colors';

export default () => (
  <View style={{ flex: 1 }}>
    <Text style={{ color: PRIMARY_COLOR, fontSize: HEADER_FONT_SIZE, fontWeight: 'bold' }}>
      Calendar
    </Text>
  </View>
);
