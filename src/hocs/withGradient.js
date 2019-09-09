import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default CustomComponent => () => (
  <LinearGradient
    colors={['#574574', '#454574']}
    start={{ x: 1, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      flex: 1,
      paddingHorizontal: 15,
    }}
  >
    <CustomComponent />
  </LinearGradient>
);
