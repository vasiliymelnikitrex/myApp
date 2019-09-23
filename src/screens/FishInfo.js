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
    <View>
      <Text
        style={{
          paddingHorizontal: 12,
          paddingVertical: 20,
          color: '#fff',
          fontSize: 20,
        }}
      >
        Search...
      </Text>
      <FlatList
        keyExtractor={item => item.src}
        data={fishes.sort((a, b) =>
          a.species_name[0] > b.species_name[0] ? 1 : -1,
        )}
        renderItem={({ item }) => (
          <FishItem name={item.species_name} src={item.src} />
        )}
      />
    </View>
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
