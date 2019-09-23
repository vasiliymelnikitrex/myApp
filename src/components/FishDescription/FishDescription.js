import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// import { FISH_IMG_BASE_URL } from '../../constants';

const FishDescription = () => (
  <View style={{ flex: 1 }}>
    <Text
      style={{
        justifyContent: 'flex-end',
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        paddingRight: 50,
      }}
    >
      123
    </Text>
  </View>
);

FishDescription.propTypes = {
  // data: PropTypes.object.isRequired,
};

// FishDescription.defaultProps = {
//   onPress: PropTypes.null,
// };

export default FishDescription;
