import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { MAIN_THEME } from '../../styles/colors';
import styles from './styles';

export default CustomComponent => props => (
  <LinearGradient
    colors={[MAIN_THEME.GRADIENT_START_COLOR, MAIN_THEME.GRADIENT_FINISH_COLOR]}
    start={{ x: 1, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <CustomComponent {...props} />
  </LinearGradient>
);
