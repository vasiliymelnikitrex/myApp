import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Keyboard } from 'react-native';

import { Container, FishItem, Search, Spinner } from '../components';
import { sortData, filterByKey } from '../helpers';

const FishList = ({ data, navigation, isFetching }) => {
  const [filteredData, setFilteredData] = useState(null);

  const handlePress = scopedData => () =>
    navigation.navigate('Details', {
      data: scopedData,
      renderComponent: 'FishDescription',
    });

  const getKey = ({ name, src }) => name + src;

  const handleChange = val =>
    setFilteredData(data.filter(filterByKey(val, 'species_name')));

  const handleScroll = () => Keyboard.dismiss();

  return (
    <Container>
      <Search onChange={handleChange} />
      {isFetching ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={getKey}
          data={filteredData || sortData(data)}
          onScrollBeginDrag={handleScroll}
          renderItem={({ item }) => (
            <FishItem
              name={item.species_name}
              src={item.src}
              onPress={handlePress(item)}
            />
          )}
        />
      )}
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
  ),
  navigation: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

FishList.defaultProps = {
  data: [],
};

export default FishList;
