import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { withGradient } from '../../hocs';
import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default withGradient(Container);
