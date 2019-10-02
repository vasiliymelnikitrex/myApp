import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ArrowBack = ({ title, goBack }) => (
  <TouchableOpacity style={styles.container} onPress={goBack}>
    <Text style={styles.text}>&larr;</Text>
    <Text style={styles.arrow}>{title}</Text>
  </TouchableOpacity>
);

ArrowBack.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ArrowBack;
