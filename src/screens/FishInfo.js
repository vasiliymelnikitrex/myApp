import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const FishInfo = ({ fishes }) => (
  <View style={{ flex: 1 }}>
    {!Boolean(fishes.length) ? (
      <Text>Waiting...</Text>
    ) : (
      fishes.map(item => (
        <View>
          <Text>{item.species_name}</Text>
        </View>
      ))
    )}
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
