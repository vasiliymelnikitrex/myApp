import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { GRADIENT_START_COLOR, GRADIENT_FINISH_COLOR } from '../../styles/colors';
import styles from './styles';

export default CustomComponent => props => (
  <LinearGradient
    colors={[GRADIENT_START_COLOR, GRADIENT_FINISH_COLOR]}
    start={{ x: 1, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <CustomComponent {...props} />
  </LinearGradient>
);
