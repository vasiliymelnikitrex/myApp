import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const FishInfo = ({ fishes }) => (
  <View style={{ flex: 1 }}>
    <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
      FishInfo - {fishes.length}
    </Text>
  </View>
);

FishInfo.propTypes = {
  fishes: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      species_name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};

export default FishInfo;
