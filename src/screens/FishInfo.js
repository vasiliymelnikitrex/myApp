import React from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList } from 'react-native';

import { Container, FishItem, Search } from '../components';
import { sortData } from '../helpers';

const FishInfo = ({ fishes, navigation }) => {
  const handlePress = data => () =>
    navigation.navigate('Details', {
      data,
      renderComponent: 'FishDescription',
    });

  const getKey = ({ name, src }) => name + src;

  return (
    <Container>
      {!Boolean(fishes.length) ? ( // TODO: Spinner
        <Text>Waiting...</Text>
      ) : (
        <>
          <Search />
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
        </>
      )}
    </Container>
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
