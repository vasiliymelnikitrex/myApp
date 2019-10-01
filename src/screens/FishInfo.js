import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import FishItem from '../components/FishItem';
import { sortData } from '../helpers';
import { ITEM_VERTICAL_PADDING } from '../styles/paddings';
import { TEXT_FONT_SIZE } from '../styles/fontSizes';
import { PRIMARY_COLOR } from '../styles/colors';

const FishInfo = ({ fishes, navigation }) => {
  const handlePress = data => () =>
    navigation.navigate('Details', {
      data,
      renderComponent: 'FishDescription',
    });

  const getKey = ({ name, src }) => name + src;

  return !Boolean(fishes.length) ? (
    <View>
      <Text>Waiting...</Text>
    </View>
  ) : (
    <View>
      <Text
        style={{
          paddingVertical: ITEM_VERTICAL_PADDING,
          color: PRIMARY_COLOR,
          fontSize: TEXT_FONT_SIZE,
        }}
      >
        Search...
      </Text>
      <FlatList
        keyExtractor={getKey}
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
