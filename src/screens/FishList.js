import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { Container, FishItem, Search } from '../components';
import { sortData } from '../helpers';

const FishList = ({ data, navigation }) => {
  const handlePress = scopedData => () =>
    navigation.navigate('Details', {
      data: scopedData,
      renderComponent: 'FishDescription',
    });

  const getKey = ({ name, src }) => name + src;

  return (
    <Container>
      <Search />
      <FlatList
        keyExtractor={getKey}
        data={sortData(data)}
        renderItem={({ item }) => (
          <FishItem
            name={item.species_name}
            src={item.src}
            onPress={handlePress(item)}
          />
        )}
      />
    </Container>
  );
};

FishList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      species_name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default FishList;
