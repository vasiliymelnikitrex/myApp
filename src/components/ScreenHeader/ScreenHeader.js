import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const ScreenHeader = ({ title }) => (
  <View>
    <Text style={styles.text}>{title}</Text>
  </View>
);

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ScreenHeader;
