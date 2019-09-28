import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { getFishInfoSelector } from '../../redux/selectors';
import { getFishInfo } from '../../redux/actions';
import { removeTags } from '../../helpers';

const FishDescription = ({ path, navigate }) => {
  const dispatch = useDispatch();
  const fishInfo = useSelector(getFishInfoSelector);

  const onPress = screen => () => navigate(screen);

  useEffect(() => {
    dispatch(getFishInfo('REQUEST', path));
  }, []);

  return fishInfo ? (
    <ScrollView style={{ flex: 1 }}>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {fishInfo && removeTags(fishInfo.Availability)}
      </Text>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {removeTags(fishInfo.Biology)}
      </Text>
      <TouchableOpacity onPress={onPress('MapInfo')}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress('FoodInfo')}>
        <Text>Food</Text>
      </TouchableOpacity>
    </ScrollView>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

FishDescription.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FishDescription;
