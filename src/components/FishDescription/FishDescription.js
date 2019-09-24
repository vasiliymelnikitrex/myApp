import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';

import { getFishInfoSelector } from '../../redux/selectors';
import { getFishInfo } from '../../redux/actions';
import { removeTags } from '../../helpers';

const FishDescription = ({ path }) => {
  const dispatch = useDispatch();
  const fishInfo = useSelector(getFishInfoSelector);

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
