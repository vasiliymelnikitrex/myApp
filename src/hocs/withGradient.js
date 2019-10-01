import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_PADDING } from '../styles/paddings';

export default CustomComponent => props => (
  <LinearGradient
    colors={['#574574', '#454574']}
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
