import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import FishItem from '../components/FishItem';

const FishInfo = ({ fishes }) =>
  (!Boolean(fishes.length) ? (
    <View>
      <Text>Waiting...</Text>
    </View>
  ) : (
    <FlatList
      keyExtractor={item => item.src}
      data={fishes}
      renderItem={({ item }) => (
        <FishItem name={item.species_name} src={item.src} />
      )}
    />
  ));

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
