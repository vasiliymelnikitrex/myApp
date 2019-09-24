import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import FishItem from '../components/FishItem';

const FishInfo = ({ fishes, navigation }) => {
  const sortData = data =>
    data.sort((a, b) => {
      if (a.species_name[0] > b.species_name[0]) {
        return 1;
      }
      if (a.species_name[0] < b.species_name[0]) {
        return -1;
      }
      return 0;
    });

  const handlePress = data => () =>
    navigation.navigate('Details', {
      data,
      renderComponent: 'FishDescription',
    });

  return !Boolean(fishes.length) ? (
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
        keyExtractor={item => item.name + item.src}
        data={sortData(fishes)}
        renderItem={({ item }) => (
          <FishItem
            name={item.species_name}
            src={item.src}
            onPress={handlePress(item)}
          />
        )}
      />
    </View>
  );
};

FishInfo.propTypes = {
  fishes: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      species_name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default FishInfo;
