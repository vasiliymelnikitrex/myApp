import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import { PRIMARY_COLOR } from '../../styles/colors';

import styles from './styles';

const Spinner = ({ size }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={PRIMARY_COLOR} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};

export default Spinner;
