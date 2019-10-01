import React from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { HEADER_FONT_SIZE } from '../styles/fontSizes';
import { PRIMARY_COLOR } from '../styles/colors';

export default () => (
  <Container>
    <Text style={{ color: PRIMARY_COLOR, fontSize: HEADER_FONT_SIZE, fontWeight: 'bold' }}>
      Settings
    </Text>
  </Container>
);