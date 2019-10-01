import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_PADDING } from '../styles/paddings';
import { GRADIENT_START_COLOR, GRADIENT_FINISH_COLOR } from '../styles/colors';

export default CustomComponent => props => (
  <LinearGradient
    colors={[GRADIENT_START_COLOR, GRADIENT_FINISH_COLOR]}
    start={{ x: 1, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      flex: 1,
      paddingHorizontal: MAIN_PADDING,
    }}
  >
    <CustomComponent {...props} />
  </LinearGradient>
);
